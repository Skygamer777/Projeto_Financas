const transactions = [
  { id: 26, title: 'Depósito em conta corrente', value: 12000, type: 'receita', summary: 'Depósito efetuado em conta corrente no Banco Santander S/A, em dinheiro.', nature: 'Ativo / Caixa para Banco', classification: 'D - Banco / C - Caixa', logic: 'O dinheiro em caixa sai do caixa e entra na conta bancária. O ativo financeiro no banco aumenta, enquanto o caixa diminui.', step: '1. Reconhecer que o dinheiro foi transferido entre contas do ativo. 2. Debitar Banco. 3. Creditar Caixa. 4. Validar que o valor total não mudou, apenas a forma de guarda do patrimônio.' },
  { id: 27, title: 'Compra à vista', value: 500, type: 'despesa', summary: 'Compra à vista, conforme nota fiscal nº 555, da Papelaria Jaboticabeira S/A, no valor de R$ 500,00.', nature: 'Despesa / Estoque ou material de escritório', classification: 'D - Material de escritório / C - Caixa', logic: 'A empresa adquire material para uso operacional. Houve saída de caixa e aumento de gasto ou estoque, conforme a natureza do bem.', step: '1. Identificar que o item foi adquirido para uso no negócio. 2. Debitar a conta de despesa ou material. 3. Creditar caixa. 4. Confirmar que a operação reduziu o caixa.' },
  { id: 28, title: 'Venda à vista', value: 15000, type: 'receita', summary: 'Venda à vista, no valor de R$ 15.000,00, conforme recibo emitido.', nature: 'Receita / Ativo', classification: 'D - Caixa / C - Receita de vendas', logic: 'A empresa recebeu dinheiro no ato. Isso aumenta o caixa e reconhece a receita da venda.', step: '1. Verificar que foi uma venda à vista. 2. Debitar Caixa. 3. Creditar Receita de Vendas. 4. Confirmar ganho de caixa e aumento do resultado.' },
  { id: 29, title: 'Venda à vista de mercadorias', value: 1900, type: 'receita', summary: 'Venda à vista, de mercadorias, no valor de R$ 1.900,00.', nature: 'Receita / Estoque', classification: 'D - Caixa / C - Receita de vendas', logic: 'Quando o cliente paga à vista, o caixa aumenta e a venda gera receita. O estoque deve ser reduzido pela mercadoria vendida.', step: '1. Identificar o produto vendido. 2. Registrar a receita. 3. Reduzir o estoque em contrapartida. 4. Confirmar que a operação gerou líquido.' },
  { id: 30, title: 'Venda à vista de imóvel', value: 50000, type: 'receita', summary: 'Venda à vista, de uma casa para a Sra. Arlete Padovan, no valor de R$ 50.000,00.', nature: 'Ativo imobilizado / Receita', classification: 'D - Caixa / C - Imóveis', logic: 'A venda de um bem imobilizado representa baixa de ativo e entrada de caixa. Se o valor for maior que o custo, pode haver ganho de capital.', step: '1. Verificar que o bem foi alienado. 2. Debitar Caixa. 3. Creditar o ativo vendido. 4. Se houver ganho, registrar em resultado.' },
  { id: 31, title: 'Saque para uso pessoal', value: 3500, type: 'despesa', summary: 'Saque efetuado junto ao Banco do Brasil S/A, no valor de R$ 3.500,00.', nature: 'Retirada de capital / Ativo', classification: 'D - Retirada do sócio / C - Banco', logic: 'É uma retirada do proprietário, não despesa da empresa. O dinheiro sai do banco e reduz o patrimônio líquido do sócio.', step: '1. Reconhecer que é retirada do empresário. 2. Debitar conta de retirada. 3. Creditar Banco. 4. Confirmar que não é custo operacional.' },
  { id: 32, title: 'Venda à vista de microcomputador', value: 3000, type: 'receita', summary: 'Venda à vista de um microcomputador com impressora, marca TRR, cfe. nota fiscal nº 73, por R$ 3.000,00.', nature: 'Ativo / Receita', classification: 'D - Caixa / C - Receita de vendas', logic: 'A empresa vendeu um bem do ativo para receber dinheiro à vista. O caixa aumenta e o ativo deixa de existir no patrimônio.', step: '1. Identificar a venda do ativo. 2. Debitar Caixa. 3. Creditar Receita ou baixa do ativo. 4. Validar o impacto no patrimônio.' },
  { id: 33, title: 'Pagamento a terceiro', value: 700, type: 'despesa', summary: 'Pagamento efetuado em dinheiro ao Sr. Joel Ferreira, referente ao aluguel de maio, cfe. recibo: R$ 700,00.', nature: 'Despesa / Aluguel', classification: 'D - Despesa de aluguel / C - Caixa', logic: 'A empresa pagou aluguel do mês. Isso representa despesa e diminuição do caixa.', step: '1. Classificar como despesa operacional. 2. Debitar Despesa de Aluguel. 3. Creditar Caixa. 4. Confirmar que a despesa reduz o resultado do período.' },
  { id: 34, title: 'Pagamento de energia elétrica', value: 110, type: 'despesa', summary: 'Pagamento efetuado na agência bancária do BANESPA, referente a gasto com energia elétrica, cfe. recibo: R$ 110,00.', nature: 'Despesa / Energia', classification: 'D - Despesa de energia / C - Banco', logic: 'A empresa consume energia elétrica e paga o valor. A despesa aumenta e o banco diminui.', step: '1. Reconhecer o gasto como despesa operacional. 2. Debitar despesa. 3. Creditar Banco. 4. Validar o impacto no resultado.' },
  { id: 35, title: 'Pagamento de nota fiscal', value: 600, type: 'despesa', summary: 'Pagamento da nota fiscal nº 1111, emitida pela Lanchonete Rodoviária, referente a lanches e refeições, no valor de R$ 600,00, em dinheiro.', nature: 'Despesa / Alimentação', classification: 'D - Despesa com alimentação / C - Caixa', logic: 'Existe gasto com alimentação do pessoal. O caixa é reduzido e a despesa é reconhecida.', step: '1. Verificar que o gasto é operacional. 2. Debitar despesa com alimentação. 3. Creditar Caixa. 4. Confirmar que a operação reduz o resultado.' },
  { id: 36, title: 'Recebimento de prestação de serviços', value: 6000, type: 'receita', summary: 'Recebida do Sr. Laércio Ferreira a importância de R$ 6.000,00 em dinheiro, referente a serviços prestados, cfe. nota fiscal nº 99.', nature: 'Receita / Caixa', classification: 'D - Caixa / C - Receita de serviços', logic: 'O cliente pagou em dinheiro por serviço prestado. O caixa aumenta e a receita é reconhecida.', step: '1. Confirmar que houve prestação de serviço. 2. Debitar Caixa. 3. Creditar Receita de Serviços. 4. Confirmar que a atividade gerou faturamento.' },
  { id: 37, title: 'Recebimento de cliente', value: 500, type: 'receita', summary: 'Recebida da Sra. Zenaide Paidon a importância de R$ 500,00 referentes ao aluguel, cfe. recibo nesta data.', nature: 'Receita / Aluguel', classification: 'D - Caixa / C - Receitas de aluguel', logic: 'O cliente pagou o aluguel em dinheiro. O caixa cresce e a receita de aluguel é reconhecida.', step: '1. Identificar a natureza da operação como receita de aluguel. 2. Debitar Caixa. 3. Creditar Receita de Aluguel. 4. Validar o impacto no resultado.' },
  { id: 38, title: 'Recebimento de veículo ou bem', value: 3000, type: 'receita', summary: 'Recebida do Sr. João Reimberg a importância de R$ 3.000,00, referente ao aluguel de um caminhão de nossa propriedade, cfe. recibo nesta data.', nature: 'Receita / Aluguel de bem', classification: 'D - Caixa / C - Receita de aluguel', logic: 'A empresa recebeu valor pelo aluguel de um bem próprio. O caixa aumenta e a operação gera receita.', step: '1. Confirmar que a operação é aluguel de bem. 2. Debitar Caixa. 3. Creditar Receita de Aluguel. 4. Validar se a receita foi gerada no período.' },
  { id: 39, title: 'Pagamento de juros por atraso', value: 70, type: 'despesa', summary: 'Pagamento à Casa Nogueira S/A, da importância de R$ 70,00 de juros por atraso no cumprimento de obrigações. Obs: o pagamento foi efetuado por meio de cheque de nossa emissão, Banco do Brasil S/A.', nature: 'Despesa / Juros e encargos', classification: 'D - Despesa com juros / C - Banco', logic: 'O pagamento do atraso gera despesa financeira, e a conta bancária deve ser reduzida.', step: '1. Reconhecer que o valor se refere a juros. 2. Debitar despesa financeira. 3. Creditar Banco. 4. Validar o efeito no resultado.' },
  { id: 40, title: 'Pagamento a transportadora', value: 250, type: 'despesa', summary: 'Pagamento efetuado à Transportadora Catuçaba Ltda., referente a fretes, no valor de R$ 250,00. Pagamento efetuado com cheque Banco do Brasil S/A, recebido do nosso cliente.', nature: 'Despesa / Fretes', classification: 'D - Despesa com fretes / C - Banco', logic: 'A empresa pagou frete para transportar mercadoria. Esse custo é despesa e reduz o banco.', step: '1. Identificar que o valor é referente a frete. 2. Debitar despesa com fretes. 3. Creditar Banco. 4. Confirmar que a movimentação foi de saída de caixa.' },
  { id: 41, title: 'Pagamento de imposto e taxa', value: 930, type: 'despesa', summary: 'Pagamento efetuado no Banco do Brasil S/A, referente a impostos e taxas, conforme guia no valor de R$ 930,00.', nature: 'Despesa tributária', classification: 'D - Despesa de impostos / C - Banco', logic: 'A empresa pagou tributos e encargos. Isso é despesa fiscal e reduz o saldo bancário.', step: '1. Verificar que o valor é tributo ou taxa. 2. Debitar despesa tributária. 3. Creditar Banco. 4. Confirmar que não é investimento nem custo de produção.' }
];

const stepPanels = [
  { title: 'Etapa 1: Entenda a operação', content: 'Leia a descrição da transação, identifique o que aconteceu e se ela envolve entrada ou saída de dinheiro, compra, venda, pagamento ou recebimento.' },
  { title: 'Etapa 2: Classifique a conta', content: 'Classifique a operação em conta de ativo, passivo, despesa, receita ou patrimônio líquido. Isso orienta o débito e o crédito corretos.' },
  { title: 'Etapa 3: Valide o lançamento', content: 'Confirme qual conta deve ser debitada e qual deve ser creditada, mantendo sempre o equilíbrio contábil da operação.' },
  { title: 'Etapa 4: Analise o impacto', content: 'Verifique se a operação altera o caixa, o patrimônio, o resultado ou a estrutura do ativo e passivo.' },
  { title: 'Etapa 5: Conclusão', content: 'Ao final, a operação deve estar consistente com a regra contábil: débito e crédito iguais, além de impacto lógico no balanço ou no resultado.' }
];

const revenueTotal = document.getElementById('revenueTotal');
const expenseTotal = document.getElementById('expenseTotal');
const netBalance = document.getElementById('netBalance');
const totalVolume = document.getElementById('totalVolume');
const barChart = document.getElementById('barChart');
const stepTitle = document.getElementById('stepTitle');
const progressFill = document.getElementById('progressFill');
const answerPanel = document.getElementById('answerPanel');
const transactionList = document.getElementById('transactionList');
const transactionBadge = document.getElementById('transactionBadge');
const transactionTitle = document.getElementById('transactionTitle');
const summaryList = document.getElementById('summaryList');
const prevStep = document.getElementById('prevStep');
const nextStep = document.getElementById('nextStep');
const toggleTheme = document.getElementById('toggleTheme');
const simulatorValue = document.getElementById('simulatorValue');
const simulatorType = document.getElementById('simulatorType');
const simulatorResult = document.getElementById('simulatorResult');
const calculateBtn = document.getElementById('calculateBtn');

let currentIndex = 0;
let currentStep = 0;

function money(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function updateKpis() {
  const receita = transactions.filter(item => item.type === 'receita').reduce((sum, item) => sum + item.value, 0);
  const despesa = transactions.filter(item => item.type === 'despesa').reduce((sum, item) => sum + item.value, 0);
  const saldo = receita - despesa;

  revenueTotal.textContent = money(receita);
  expenseTotal.textContent = money(despesa);
  netBalance.textContent = money(saldo);
  totalVolume.textContent = transactions.length;
}

function renderChart() {
  const labels = ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41'];
  const values = transactions.map(item => item.value / 1500);

  barChart.innerHTML = labels.map((label, index) => `
    <div class="bar-column">
      <div class="bar" style="height:${Math.max(values[index], 18)}px"></div>
      <span class="bar-label">${label}</span>
    </div>
  `).join('');
}

function renderList() {
  transactionList.innerHTML = '';

  transactions.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `transaction-item ${index === currentIndex ? 'active' : ''}`;
    button.innerHTML = `<small>Lançamento ${item.id}</small><strong>${item.title}</strong>`;
    button.addEventListener('click', () => {
      currentIndex = index;
      currentStep = 0;
      render();
    });
    transactionList.appendChild(button);
  });
}

function renderSummary() {
  summaryList.innerHTML = '';
  const principles = [
    'A operação precisa ser identificada antes do lançamento contábil.',
    'O débito e o crédito devem manter o equilíbrio do patrimônio.',
    'Receitas aumentam o resultado e despesas reduzem o resultado.',
    'A análise financeira deve priorizar integridade, risco e consistência.'
  ];

  principles.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    summaryList.appendChild(li);
  });
}

function renderStepPanel() {
  const step = stepPanels[currentStep];
  const current = transactions[currentIndex];

  stepTitle.textContent = `${currentStep + 1} / ${stepPanels.length}`;
  progressFill.style.width = `${((currentStep + 1) / stepPanels.length) * 100}%`;
  transactionBadge.textContent = `Lançamento ${current.id}`;
  transactionTitle.textContent = current.title;

  answerPanel.innerHTML = `
    <div class="answer-card">
      <div class="meta">
        <h4>${step.title}</h4>
        <span class="badge">${current.nature}</span>
      </div>
      <p>${current.summary}</p>

      <div class="key-points">
        <div class="key-point">
          <strong>Classificação</strong>
          <span>${current.classification}</span>
        </div>
        <div class="key-point">
          <strong>Raciocínio</strong>
          <span>${current.logic}</span>
        </div>
        <div class="key-point">
          <strong>Passo a passo</strong>
          <span>${current.step}</span>
        </div>
      </div>
    </div>

    <div class="answer-card">
      <strong>Orientação da etapa:</strong>
      <p style="margin-top:8px;">${step.content}</p>
    </div>

    <div class="answer-card">
      <strong>Resposta final do passo:</strong>
      <p style="margin-top:8px;">${current.title}. ${current.logic} Portanto, a resposta final é: ${current.classification}. Esse registro mantém o equilíbrio patrimonial e o impacto financeiro esperado na conta de ${current.nature.toLowerCase()}.</p>
    </div>
  `;
}

function render() {
  renderList();
  renderStepPanel();
  updateKpis();
  renderChart();
}

prevStep.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep -= 1;
  }
  render();
});

nextStep.addEventListener('click', () => {
  if (currentStep < stepPanels.length - 1) {
    currentStep += 1;
  } else {
    currentIndex = (currentIndex + 1) % transactions.length;
    currentStep = 0;
  }
  render();
});

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleTheme.textContent = document.body.classList.contains('dark') ? 'Modo claro' : 'Modo escuro';
});

calculateBtn.addEventListener('click', () => {
  const amount = Number(simulatorValue.value || 0);
  const type = simulatorType.value;

  let message = 'Resultado: o valor será considerado como recepção de recursos para o patrimônio.';

  if (type === 'despesa') {
    message = `Resultado: o valor de ${money(amount)} reduz o caixa e aumenta a despesa operacional.`;
  }

  if (type === 'receita') {
    message = `Resultado: o valor de ${money(amount)} aumenta o caixa e reconhece receita no período.`;
  }

  if (type === 'ativo') {
    message = `Resultado: o valor de ${money(amount)} representa aquisição ou movimentação de ativo.`;
  }

  if (type === 'passivo') {
    message = `Resultado: o valor de ${money(amount)} representa obrigação ou dívida a pagar.`;
  }

  simulatorResult.textContent = message;
});

render();
renderSummary();
