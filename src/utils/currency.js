import { BAKERY_CONFIG } from '../data/config';

/**
 * Format a number into currency string with symbol
 * e.g. 1450 => "₹1,450"
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return `${BAKERY_CONFIG.currency.symbol}0`;
  
  const formattedNumber = new Intl.NumberFormat('en-IN').format(amount);
  
  if (BAKERY_CONFIG.currency.position === 'suffix') {
    return `${formattedNumber} ${BAKERY_CONFIG.currency.symbol}`;
  }
  
  return `${BAKERY_CONFIG.currency.symbol}${formattedNumber}`;
};
