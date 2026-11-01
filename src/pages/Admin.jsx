import React, { useState, useEffect } from 'react';
import { 
  Lock, CheckCircle2, Clock, MapPin, Phone, MessageCircle, 
  Trash2, RefreshCw, ShoppingBag, DollarSign, Calendar, 
  AlertCircle, Sparkles, Filter, ExternalLink, LogOut, Check, X, Shield 
} from 'lucide-react';
import { 
  adminLogin, isLocalAdminLoggedIn, adminLogout, getAdminStats, 
  fetchOrders, updateOrderStatus, deleteOrder, 
  fetchCustomInquiries, updateInquiryStatus, deleteInquiry, 
  fetchMessages 
} from '../services/api';
import { BAKERY_CONFIG } from '../data/config';
import { formatCurrency } from '../utils/currency';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'inquiries', 'overview', 'messages', 'studio'
  
  // Data states
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [messages, setMessages] = useState([]);
  const [orderFilter, setOrderFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Check login on load
  useEffect(() => {
    if (isLocalAdminLoggedIn()) {
      setIsAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsData, ordersData, inqData, msgData] = await Promise.all([
        getAdminStats(),
        fetchOrders(orderFilter),
        fetchCustomInquiries(),
        fetchMessages()
      ]);
      setStats(statsData);
      setOrders(ordersData);
      setInquiries(inqData);
      setMessages(msgData);
    } catch (e) {
      console.error('Error loading admin data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders(orderFilter).then(setOrders);
    }
  }, [orderFilter, isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await adminLogin(pinInput);
    if (res.success) {
      setIsAuthenticated(true);
      setPinInput('');
      loadDashboardData();
    } else {
      setLoginError(res.message || 'Incorrect PIN');
    }
  };

  const handleLogout = () => {
    adminLogout();
    setIsAuthenticated(false);
  };

  const handleStatusChange = async (orderId, newStatus) => {
    await updateOrderStatus(orderId, newStatus);
    const updated = await fetchOrders(orderFilter);
    setOrders(updated);
    const updatedStats = await getAdminStats();
    setStats(updatedStats);
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm(`Delete order ${orderId}?`)) {
      await deleteOrder(orderId);
      const updated = await fetchOrders(orderFilter);
      setOrders(updated);
      const updatedStats = await getAdminStats();
      setStats(updatedStats);
    }
  };

  const handleInquiryStatusChange = async (inqId, newStatus) => {
    await updateInquiryStatus(inqId, newStatus);
    const updated = await fetchCustomInquiries();
    setInquiries(updated);
  };

  const handleDeleteInquiry = async (inqId) => {
    if (window.confirm('Delete this custom cake inquiry?')) {
      await deleteInquiry(inqId);
      const updated = await fetchCustomInquiries();
      setInquiries(updated);
    }
  };

  // Status color pill helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'baking':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'ready_for_pickup':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'out_for_delivery':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'cancelled':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'pending':
      default:
        return 'bg-amber-50 text-amber-900 border-amber-300 animate-pulse';
    }
  };

  // -----------------------------------------------------------
  // AUTHENTICATION SCREEN IF NOT LOGGED IN
  // -----------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-blush shadow-soft-xl space-y-6 text-center">
          
          <div className="w-16 h-16 rounded-full bg-blush/60 text-chocolate flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-7 h-7 text-rose-600" />
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] uppercase font-bold tracking-widest text-rose-500">
              Bakery Owner Portal
            </span>
            <h1 className="font-serif text-3xl font-bold text-chocolate">
              Admin Dashboard
            </h1>
            <p className="text-xs text-chocolate/70">
              Enter your secret PIN to view incoming customer orders, bespoke inquiries, and manage your kitchen studio.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter 4-digit PIN (Default: 8034)"
                className="w-full text-center text-xl tracking-widest py-3 px-4 rounded-xl bg-ivory border border-blush text-chocolate focus:border-rose-400 outline-none"
                autoFocus
              />
              {loginError && (
                <p className="text-xs text-rose-600 mt-2 font-medium">{loginError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-chocolate text-ivory text-sm font-semibold hover:bg-chocolate-600 transition-colors shadow-soft"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="p-3.5 rounded-2xl bg-cream/70 border border-blush text-[11px] text-chocolate/75 space-y-1">
            <p className="font-bold text-chocolate flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-rose-500" />
              <span>Owner Access Notice</span>
            </p>
            <p>
              Default PIN is <strong className="font-mono text-rose-700 font-bold">8034</strong> (Tower 4, Flat 803). You can change this anytime.
            </p>
          </div>

        </div>
      </div>
    );
  }

  // -----------------------------------------------------------
  // MAIN ADMIN DASHBOARD (AUTHENTICATED)
  // -----------------------------------------------------------
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-blush/60 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              100% Pure Veg Home Studio
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-chocolate mt-1">
            Bake O Bliss Owner Panel
          </h1>
          <p className="text-xs text-chocolate/70 flex items-center gap-1.5 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
            <span>Flat 803, Tower 4, North Town Apartment, Perambur, Chennai</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={loadDashboardData}
            className="p-2.5 rounded-xl bg-white border border-blush hover:bg-blush/40 text-chocolate transition-colors text-xs font-medium flex items-center gap-1.5 shadow-xs"
            title="Refresh database"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh Data</span>
          </button>
          
          <button
            type="button"
            onClick={handleLogout}
            className="p-2.5 rounded-xl bg-cream hover:bg-rose-50 hover:text-rose-700 text-chocolate/80 transition-colors text-xs font-semibold flex items-center gap-1.5 border border-blush/60"
            title="Log out from admin"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-blush/70 shadow-soft space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">Total Orders</span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-bold text-chocolate">{stats.totalOrders}</span>
              <span className="text-xs text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                {stats.pendingOrders} pending
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-blush/70 shadow-soft space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">Custom Inquiries</span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-bold text-chocolate">{stats.totalInquiries}</span>
              <span className="text-xs text-rose-700 font-medium bg-blush/50 px-2 py-0.5 rounded-full">
                Bespoke Cakes
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-blush/70 shadow-soft space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">Estimated Revenue</span>
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl font-bold text-chocolate">
                {formatCurrency(stats.estimatedRevenue)}
              </span>
              <span className="text-xs text-emerald-700 font-medium">Recorded</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-blush/70 shadow-soft space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/60">Kitchen Studio</span>
            <div className="text-xs text-chocolate/80 space-y-0.5 pt-1">
              <p className="font-bold text-emerald-800">🌱 100% Pure Veg</p>
              <p className="truncate">Tower 4, North Town</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-blush/60 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'orders'
              ? 'bg-chocolate text-ivory shadow-soft'
              : 'bg-white hover:bg-blush/40 text-chocolate/80 border border-blush'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Orders ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'inquiries'
              ? 'bg-chocolate text-ivory shadow-soft'
              : 'bg-white hover:bg-blush/40 text-chocolate/80 border border-blush'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Custom Cake Inquiries ({inquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('messages')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'messages'
              ? 'bg-chocolate text-ivory shadow-soft'
              : 'bg-white hover:bg-blush/40 text-chocolate/80 border border-blush'
          }`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Contact Messages ({messages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('studio')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'studio'
              ? 'bg-chocolate text-ivory shadow-soft'
              : 'bg-white hover:bg-blush/40 text-chocolate/80 border border-blush'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Studio Profile & Settings</span>
        </button>
      </div>

      {/* -------------------------------------------------------- */}
      {/* TAB 1: ORDERS MANAGEMENT */}
      {/* -------------------------------------------------------- */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          
          {/* Order Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-chocolate/60 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Filter by:
            </span>
            {['all', 'pending', 'confirmed', 'baking', 'completed', 'cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setOrderFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  orderFilter === st
                    ? 'bg-chocolate text-ivory'
                    : 'bg-white text-chocolate/70 border border-blush hover:bg-blush/40'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Orders List */}
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-blush/60 p-6 space-y-2">
              <ShoppingBag className="w-10 h-10 text-chocolate/30 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-chocolate">No orders in this category</h3>
              <p className="text-xs text-chocolate/60">
                When customers place orders from the website or checkout, they will appear here instantly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const customerCleanPhone = (order.customer_phone || '').replace(/[^0-9]/g, '');
                const directChatUrl = `https://wa.me/${customerCleanPhone}?text=${encodeURIComponent(
                  `Hello ${order.customer_name}! This is Bake O Bliss regarding your order ${order.id}.`
                )}`;

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-blush/80 shadow-soft hover:shadow-soft-lg transition-all space-y-4"
                  >
                    {/* Top Row: ID, Time & Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blush/40 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-chocolate bg-ivory px-2.5 py-1 rounded-lg border border-blush">
                          {order.id}
                        </span>
                        <span className="text-xs text-chocolate/60">
                          {new Date(order.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getStatusBadge(order.status)}`}>
                          {order.status}
                        </span>

                        {/* Status Updater Dropdown */}
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className="py-1 px-2.5 rounded-lg bg-ivory border border-blush text-xs font-semibold text-chocolate cursor-pointer outline-none"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="baking">Baking</option>
                          <option value="ready_for_pickup">Ready for Pickup</option>
                          <option value="out_for_delivery">Out for Delivery</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>

                    {/* Customer & Delivery Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-chocolate/80">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Customer</span>
                        <p className="font-bold text-chocolate text-sm mt-0.5">{order.customer_name}</p>
                        <p className="text-chocolate/70">{order.customer_phone}</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Fulfillment</span>
                        <p className="font-semibold text-chocolate mt-0.5">
                          {order.fulfillment_type === 'delivery' ? '🚗 Chennai Doorstep Delivery' : '🏡 Studio Self-Pickup'}
                        </p>
                        {order.delivery_address && (
                          <p className="text-chocolate/70 truncate mt-0.5" title={order.delivery_address}>
                            {order.delivery_address}
                          </p>
                        )}
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Schedule</span>
                        <p className="font-semibold text-chocolate mt-0.5 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-rose-500" />
                          <span>{order.preferred_date}</span>
                        </p>
                        {order.preferred_time && (
                          <p className="text-chocolate/70 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-rose-500" />
                            <span>{order.preferred_time}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Total Amount</span>
                        <p className="font-serif text-lg font-bold text-chocolate mt-0.5">
                          {formatCurrency(order.total_amount)}
                        </p>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                          100% Pure Veg
                        </span>
                      </div>
                    </div>

                    {/* Items Ordered List */}
                    <div className="bg-cream/40 rounded-2xl p-3.5 border border-blush/60 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-chocolate/70">
                        Items in this Order ({Array.isArray(order.items) ? order.items.length : 0})
                      </span>
                      <div className="divide-y divide-blush/40 text-xs">
                        {Array.isArray(order.items) && order.items.map((it, idx) => (
                          <div key={idx} className="py-1.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-chocolate">{it.name}</span>
                              {it.selectedVariant && (
                                <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-blush text-chocolate/70">
                                  {it.selectedVariant.label}
                                </span>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="text-chocolate/60 mr-2">Qty: {it.quantity}</span>
                              <span className="font-bold text-chocolate">{formatCurrency(it.price * it.quantity)}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {order.special_instructions && (
                        <div className="pt-2 border-t border-blush/40 text-[11px] text-chocolate/80 italic">
                          <strong>Note / Inscription:</strong> "{order.special_instructions}"
                        </div>
                      )}
                    </div>

                    {/* Actions: Chat on WhatsApp & Delete */}
                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={directChatUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebc59] text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat with Customer on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleDeleteOrder(order.id)}
                        className="p-2 text-chocolate/40 hover:text-rose-600 rounded-lg transition-colors"
                        title="Delete order record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* TAB 2: CUSTOM CAKE INQUIRIES */}
      {/* -------------------------------------------------------- */}
      {activeTab === 'inquiries' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-chocolate">
              Bespoke Custom Cake Consultations
            </h2>
            <span className="text-xs text-chocolate/60">{inquiries.length} inquiries received</span>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-blush/60 p-6 space-y-2">
              <Sparkles className="w-10 h-10 text-chocolate/30 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-chocolate">No custom cake inquiries yet</h3>
              <p className="text-xs text-chocolate/60">
                Inquiries submitted via the Custom Orders page will be logged here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inq) => {
                const customerCleanPhone = (inq.customer_phone || '').replace(/[^0-9]/g, '');
                const directChatUrl = `https://wa.me/${customerCleanPhone}?text=${encodeURIComponent(
                  `Hello ${inq.customer_name}! This is Bake O Bliss regarding your custom cake inquiry for ${inq.occasion}.`
                )}`;

                return (
                  <div
                    key={inq.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-blush/80 shadow-soft hover:shadow-soft-lg transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blush/40 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-chocolate bg-ivory px-2.5 py-1 rounded-lg border border-blush">
                          {inq.id}
                        </span>
                        <span className="font-semibold text-rose-600 text-sm">{inq.occasion}</span>
                        <span className="text-xs text-chocolate/60">
                          {new Date(inq.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={inq.status}
                          onChange={(e) => handleInquiryStatusChange(inq.id, e.target.value)}
                          className="py-1 px-2.5 rounded-lg bg-ivory border border-blush text-xs font-semibold text-chocolate cursor-pointer outline-none"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="declined">Declined</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-chocolate/80">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Customer</span>
                        <p className="font-bold text-chocolate text-sm mt-0.5">{inq.customer_name}</p>
                        <p>{inq.customer_phone}</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Date Required</span>
                        <p className="font-bold text-chocolate mt-0.5 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-rose-500" />
                          <span>{inq.required_date}</span>
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Flavour & Size</span>
                        <p className="font-semibold text-chocolate mt-0.5">{inq.cake_flavor || 'Not selected'}</p>
                        <p className="text-chocolate/60">{inq.cake_size || 'To be decided'}</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-chocolate/50 block">Dietary Standard</span>
                        <p className="font-bold text-emerald-800 mt-0.5">🌱 100% Pure Veg & Eggless</p>
                      </div>
                    </div>

                    {inq.preferred_design && (
                      <div className="p-3.5 rounded-2xl bg-cream/40 border border-blush/60 text-xs text-chocolate/80 space-y-1">
                        <strong className="text-chocolate">Design Concept / Theme:</strong>
                        <p>{inq.preferred_design}</p>
                      </div>
                    )}

                    {inq.reference_image_url && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-chocolate">Reference Photo:</span>
                        <a
                          href={inq.reference_image_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-600 hover:underline flex items-center gap-1 font-medium truncate max-w-sm"
                        >
                          <span>{inq.reference_image_url}</span>
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                      </div>
                    )}

                    {inq.additional_notes && (
                      <div className="text-xs text-chocolate/70 italic">
                        <strong>Dietary / Special Notes:</strong> "{inq.additional_notes}"
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={directChatUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebc59] text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Discuss Design on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="p-2 text-chocolate/40 hover:text-rose-600 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* TAB 3: CONTACT MESSAGES */}
      {/* -------------------------------------------------------- */}
      {activeTab === 'messages' && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-chocolate">
            Contact Page Inquiries
          </h2>

          {messages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-blush/60 p-6 space-y-2">
              <MessageCircle className="w-10 h-10 text-chocolate/30 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-chocolate">No messages yet</h3>
              <p className="text-xs text-chocolate/60">
                Messages from the Contact Us form will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className="bg-white p-5 rounded-2xl border border-blush shadow-soft space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-chocolate">{m.name}</span>
                    <span className="text-chocolate/50">{new Date(m.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="text-rose-600 font-semibold">{m.message_type || m.messageType}</p>
                  <p className="text-chocolate/80">{m.message}</p>
                  {(m.phone || m.email) && (
                    <div className="pt-2 text-chocolate/60 flex items-center gap-4">
                      {m.phone && <span>Phone: {m.phone}</span>}
                      {m.email && <span>Email: {m.email}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* TAB 4: STUDIO PROFILE & SETTINGS */}
      {/* -------------------------------------------------------- */}
      {activeTab === 'studio' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blush shadow-soft space-y-6">
          <div className="border-b border-blush/60 pb-4">
            <h2 className="font-serif text-2xl font-bold text-chocolate">
              Home Studio Configuration
            </h2>
            <p className="text-xs text-chocolate/70 mt-1">
              Confirmed studio details for Bake O Bliss in Perambur, Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-chocolate/80">
            <div className="space-y-1.5 p-4 rounded-2xl bg-cream/50 border border-blush/70">
              <span className="font-bold text-chocolate text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Verified Studio Location</span>
              </span>
              <p className="font-semibold text-chocolate">{BAKERY_CONFIG.location.title}</p>
              <p>{BAKERY_CONFIG.location.address}</p>
              <p>{BAKERY_CONFIG.location.city}, {BAKERY_CONFIG.location.state} – {BAKERY_CONFIG.location.pincode}</p>
              <p className="text-[11px] text-rose-600 italic">*{BAKERY_CONFIG.location.landmark}</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream/50 border border-blush/70">
              <span className="font-bold text-chocolate text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Dietary Guarantee</span>
              </span>
              <p className="font-semibold text-emerald-800">100% Pure Vegetarian & Eggless</p>
              <p>Strictly sanitized vegetarian bake-ware and utensils.</p>
              <p>Zero gelatin, zero animal shortening, zero eggs.</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream/50 border border-blush/70">
              <span className="font-bold text-chocolate text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Operating Hours</span>
              </span>
              <p className="font-semibold text-chocolate">{BAKERY_CONFIG.operatingHours.days}</p>
              <p>{BAKERY_CONFIG.operatingHours.hours}</p>
              <p className="text-chocolate/60 mt-1">{BAKERY_CONFIG.operatingHours.leadTimeNotice}</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-cream/50 border border-blush/70">
              <span className="font-bold text-chocolate text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500" />
                <span>WhatsApp Order Line</span>
              </span>
              <p className="font-semibold text-chocolate">{BAKERY_CONFIG.whatsappDisplayNumber}</p>
              <p className="text-chocolate/60">Configured in <code className="bg-white px-1 py-0.5 rounded font-mono text-rose-700">src/data/config.js</code></p>
              <p className="text-[11px] text-chocolate/50 mt-1">Admin Default PIN: <strong>8034</strong></p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
