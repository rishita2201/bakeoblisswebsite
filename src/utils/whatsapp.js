import { BAKERY_CONFIG } from '../data/config';
import { formatCurrency } from './currency';

/**
 * Creates clean wa.me link with encoded message
 */
export const createWhatsAppLink = (messageText) => {
  const cleanNumber = BAKERY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
};

/**
 * Generates WhatsApp URL for standard cart checkout
 */
export const generateCartOrderWhatsAppUrl = ({
  customerName,
  customerPhone,
  fulfillmentType,
  deliveryAddress,
  preferredDate,
  preferredTime,
  specialInstructions,
  items,
  totalAmount
}) => {
  const divider = '----------------------------------------';
  
  let msg = `🍰 *NEW ORDER INQUIRY - ${BAKERY_CONFIG.brandName.toUpperCase()}* 🍰\n`;
  msg += `${divider}\n\n`;
  
  // Customer details
  msg += `👤 *Customer Details:*\n`;
  msg += `• Name: ${customerName}\n`;
  msg += `• WhatsApp: ${customerPhone}\n`;
  msg += `• Fulfillment: ${fulfillmentType === 'delivery' ? '🚗 Local Delivery' : '🏡 Studio Self-Pickup'}\n`;
  
  if (fulfillmentType === 'delivery' && deliveryAddress) {
    msg += `• Delivery Address: ${deliveryAddress}\n`;
  }
  
  msg += `• Preferred Date: ${preferredDate || 'Not specified'}\n`;
  if (preferredTime) {
    msg += `• Preferred Time: ${preferredTime}\n`;
  }
  msg += `\n`;

  // Items
  msg += `📦 *Items Ordered (${items.length}):*\n`;
  items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    msg += `${index + 1}. *${item.name}*\n`;
    if (item.selectedVariant) {
      msg += `   • Size / Option: ${item.selectedVariant.label}\n`;
    }
    msg += `   • Qty: ${item.quantity} × ${formatCurrency(item.price)} = ${formatCurrency(itemTotal)}\n`;
  });
  msg += `\n`;

  // Total
  msg += `${divider}\n`;
  msg += `💰 *Estimated Total: ${formatCurrency(totalAmount)}*\n`;
  if (fulfillmentType === 'delivery') {
    msg += `*(Delivery charges to be calculated based on distance)*\n`;
  }
  msg += `${divider}\n\n`;

  // Notes
  if (specialInstructions && specialInstructions.trim()) {
    msg += `📝 *Notes & Custom Message on Cake:*\n"${specialInstructions.trim()}"\n\n`;
  }

  msg += `_Sent via ${BAKERY_CONFIG.brandName} Website._\n`;
  msg += `_Note: Order is subject to baker confirmation of availability and delivery slot._`;

  return createWhatsAppLink(msg);
};

/**
 * Generates WhatsApp URL for Custom Cake Inquiry
 */
export const generateCustomCakeWhatsAppUrl = ({
  customerName,
  customerPhone,
  occasion,
  cakeFlavor,
  cakeSize,
  preferredDesign,
  referenceImageUrl,
  requiredDate,
  additionalNotes
}) => {
  const divider = '----------------------------------------';
  
  let msg = `🎂 *CUSTOM CAKE INQUIRY - ${BAKERY_CONFIG.brandName.toUpperCase()}* 🎂\n`;
  msg += `${divider}\n\n`;
  
  msg += `👤 *Customer Details:*\n`;
  msg += `• Name: ${customerName}\n`;
  msg += `• Contact Number: ${customerPhone}\n\n`;

  msg += `✨ *Custom Cake Details:*\n`;
  msg += `• Occasion: ${occasion}\n`;
  msg += `• Required Date: ${requiredDate}\n`;
  msg += `• Preferred Flavour: ${cakeFlavor || 'Consult with Baker'}\n`;
  msg += `• Estimated Size / Weight: ${cakeSize || 'To be recommended'}\n\n`;

  if (preferredDesign) {
    msg += `🎨 *Design & Theme Idea:*\n${preferredDesign}\n\n`;
  }

  if (referenceImageUrl && referenceImageUrl.trim()) {
    msg += `🖼️ *Reference Image URL:*\n${referenceImageUrl.trim()}\n\n`;
  }

  if (additionalNotes && additionalNotes.trim()) {
    msg += `📝 *Special Requests / Allergies / Notes:*\n${additionalNotes.trim()}\n\n`;
  }

  msg += `${divider}\n`;
  msg += `_Sent via ${BAKERY_CONFIG.brandName} Custom Order Form._\n`;
  msg += `_I look forward to discussing the design and receiving a quote!_`;

  return createWhatsAppLink(msg);
};

/**
 * Generates WhatsApp URL for Direct Single-Product Ordering
 */
export const generateDirectProductWhatsAppUrl = ({
  product,
  selectedVariant,
  quantity = 1
}) => {
  const price = selectedVariant ? selectedVariant.price : product.price;
  const total = price * quantity;
  
  let msg = `🍰 *ORDER INQUIRY - ${BAKERY_CONFIG.brandName.toUpperCase()}* 🍰\n\n`;
  msg += `Hello! I would like to order:\n`;
  msg += `• Item: *${product.name}*\n`;
  if (selectedVariant) {
    msg += `• Size/Variant: ${selectedVariant.label}\n`;
  }
  msg += `• Quantity: ${quantity}\n`;
  msg += `• Total: ${formatCurrency(total)}\n\n`;
  msg += `Could you please confirm if this is available for my preferred date? Thank you!`;

  return createWhatsAppLink(msg);
};
