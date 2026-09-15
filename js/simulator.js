/**
 * YAMAHA SPORTS NEIVA - HUILA
 * SIMULADOR DE FINANCIACIÓN Y CRÉDITO INTERACTIVO
 */

const CreditSimulator = (() => {
  // Configuración base de crédito
  const DEFAULT_INTEREST_RATE = 0.0195; // Tasa efectiva mensual estimada (1.95% mes vencido)
  
  // Elementos del DOM
  let bikeSelect, customPriceInput, downPaymentRange, downPaymentDisplay, downPaymentAmountDisplay;
  let termPills, monthlyPaymentDisplay, loanAmountDisplay, totalInterestDisplay, totalPaymentDisplay;
  let btnApplyCredit;

  let currentPrice = 16800000; // NMAX por defecto
  let currentDownPaymentPercent = 20; // 20%
  let currentTermMonths = 36; // 36 meses

  // Formateador de moneda en Pesos Colombianos (COP)
  const formatCOP = (val) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  const init = () => {
    // Captura de elementos
    bikeSelect = document.getElementById('sim-bike-select');
    customPriceInput = document.getElementById('sim-custom-price');
    downPaymentRange = document.getElementById('sim-down-range');
    downPaymentDisplay = document.getElementById('sim-down-percent-display');
    downPaymentAmountDisplay = document.getElementById('sim-down-amount-display');
    termPills = document.querySelectorAll('.term-pill');
    monthlyPaymentDisplay = document.getElementById('sim-monthly-val');
    loanAmountDisplay = document.getElementById('sim-loan-amount');
    totalInterestDisplay = document.getElementById('sim-total-interest');
    totalPaymentDisplay = document.getElementById('sim-total-payment');
    btnApplyCredit = document.getElementById('btn-apply-credit');

    if (!bikeSelect || !downPaymentRange) return;

    // Eventos
    bikeSelect.addEventListener('change', onBikeChange);
    if (customPriceInput) {
      customPriceInput.addEventListener('input', onCustomPriceChange);
    }
    downPaymentRange.addEventListener('input', onDownPaymentChange);

    termPills.forEach(pill => {
      pill.addEventListener('click', () => {
        termPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentTermMonths = parseInt(pill.getAttribute('data-months'), 10) || 36;
        calculate();
      });
    });

    if (btnApplyCredit) {
      btnApplyCredit.addEventListener('click', onApplyCreditClick);
    }

    // Inicializar cálculo inicial
    calculate();
  };

  const onBikeChange = (e) => {
    const selectedOption = e.target.selectedOptions[0];
    const price = parseInt(selectedOption.getAttribute('data-price'), 10);
    if (price && price > 0) {
      currentPrice = price;
      if (customPriceInput) customPriceInput.value = price;
    }
    calculate();
  };

  const onCustomPriceChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val && val >= 1000000) {
      currentPrice = val;
      calculate();
    }
  };

  const onDownPaymentChange = (e) => {
    currentDownPaymentPercent = parseInt(e.target.value, 10) || 10;
    calculate();
  };

  const calculate = () => {
    const downPaymentAmount = Math.round(currentPrice * (currentDownPaymentPercent / 100));
    const loanAmount = Math.max(0, currentPrice - downPaymentAmount);

    // Fórmula de amortización francesa de cuota fija: Cuota = P * [i / (1 - (1 + i)^-n)]
    let monthlyPayment = 0;
    if (loanAmount > 0 && currentTermMonths > 0) {
      const i = DEFAULT_INTEREST_RATE;
      const n = currentTermMonths;
      monthlyPayment = Math.round((loanAmount * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1));
    }

    const totalPaid = (monthlyPayment * currentTermMonths) + downPaymentAmount;
    const totalInterest = Math.max(0, (monthlyPayment * currentTermMonths) - loanAmount);

    // Actualizar visualizaciones en pantalla
    if (downPaymentDisplay) downPaymentDisplay.textContent = `${currentDownPaymentPercent}%`;
    if (downPaymentAmountDisplay) downPaymentAmountDisplay.textContent = `(${formatCOP(downPaymentAmount)})`;
    if (monthlyPaymentDisplay) monthlyPaymentDisplay.textContent = formatCOP(monthlyPayment);
    if (loanAmountDisplay) loanAmountDisplay.textContent = formatCOP(loanAmount);
    if (totalInterestDisplay) totalInterestDisplay.textContent = formatCOP(totalInterest);
    if (totalPaymentDisplay) totalPaymentDisplay.textContent = formatCOP(totalPaid);
  };

  const onApplyCreditClick = () => {
    const selectedModelName = bikeSelect.options[bikeSelect.selectedIndex].text;
    const downPaymentAmount = Math.round(currentPrice * (currentDownPaymentPercent / 100));
    const loanAmount = Math.max(0, currentPrice - downPaymentAmount);
    const i = DEFAULT_INTEREST_RATE;
    const n = currentTermMonths;
    const monthlyPayment = Math.round((loanAmount * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1));

    const message = `¡Hola Yamaha Sports Neiva! Deseo solicitar el estudio de crédito para:
🏍️ *Modelo:* ${selectedModelName}
💰 *Precio:* ${formatCOP(currentPrice)}
💵 *Cuota Inicial (${currentDownPaymentPercent}%):* ${formatCOP(downPaymentAmount)}
⏳ *Plazo:* ${currentTermMonths} Meses
📅 *Cuota Estimada:* ${formatCOP(monthlyPayment)}/mes
📍 *Sede:* Principal Neiva (Cra. 5 # 12-45)

Por favor asesórenme con los requisitos. ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573123157616&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return {
    init,
    calculate,
    formatCOP
  };
})();

document.addEventListener('DOMContentLoaded', CreditSimulator.init);
