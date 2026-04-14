const STORAGE_KEY = "trading-journal-pro-v1";

const translations = {
  fr: {
    appTitle: "Trading Journal Pro",
    heroEyebrow: "Journal de trading automatisé",
    heroCopy:
      "Suivez votre stratégie en temps réel avec un seul journal de saisie, des calculs automatiques, une review filtrable et des statistiques détaillées par comportement, actif et contexte de marché.",
    tabJournal: "Journal",
    tabReview: "Review",
    tabStatistics: "Statistics",
    journalKicker: "Capture des trades",
    journalTitle: "Journal de trading",
    resetForm: "Réinitialiser",
    fieldAsset: "Actif",
    fieldOpenDate: "Date d'ouverture",
    fieldCloseDate: "Date de fermeture",
    fieldDuration: "Durée du trade",
    fieldTimeframe: "Timeframe",
    fieldSide: "Ordre du trade",
    fieldTrend: "Tendance",
    fieldRR: "RR de la position",
    fieldRiskUsd: "Risque en $",
    fieldRiskPct: "Risque en %",
    fieldFeesUsd: "Frais payés en $",
    fieldFeesR: "Frais payés en R",
    fieldGrossProfit: "Profit brut en $",
    fieldPnlUsd: "P&L en $",
    fieldPnlR: "P&L en R",
    fieldResult: "Résultat du trade",
    fieldSetup: "Setup de la position",
    fieldConfluence: "Confluence de la position",
    fieldEmotionBefore: "Émotions avant trade",
    fieldEmotionDuring: "Émotions pendant trade",
    fieldEmotionAfter: "Émotions après trade",
    fieldStrategyFollowed: "Stratégie respectée",
    fieldComments: "Commentaires",
    fieldImage: "Image du trade",
    imagePreview: "Prévisualisation",
    previewFeesR: "Frais convertis",
    previewPnlUsd: "P&L net",
    previewPnlR: "P&L en R",
    previewResult: "Résultat",
    saveTrade: "Enregistrer le trade",
    cancelEdit: "Annuler la modification",
    journalSummaryKicker: "Lecture rapide",
    journalSummaryTitle: "Historique des trades",
    reviewKicker: "Analyse de performance",
    reviewTitle: "Review par période",
    reviewPeriod: "Période d'analyse",
    reviewWeek: "Semaine",
    reviewMonth: "Mois",
    reviewQuarter: "Trimestre",
    reviewYear: "Année",
    calendarView: "Vue calendrier",
    calendarKicker: "Synthèse temporelle",
    calendarTitle: "Calendrier de performance",
    chartKicker: "Comportement de la stratégie",
    chartTitle: "Graphiques dynamiques",
    chartWinRate: "Win rate",
    chartEquity: "Equity curve",
    chartAsset: "Performance par actif",
    statisticsKicker: "Données détaillées",
    statisticsTitle: "Statistics",
    heroTrades: "Trades",
    heroPnl: "P&L total",
    heroWinRate: "Win rate",
    heroStrategy: "Respect stratégie",
    noTrades: "Aucun trade enregistré pour le moment.",
    emptyCalendar: "Aucune donnée disponible pour cette vue calendrier.",
    emptyChart: "Pas assez de données pour afficher ce graphique.",
    emptyTable: "Aucune ligne à afficher.",
    yes: "Oui",
    no: "Non",
    long: "Achat",
    short: "Vente",
    withTrend: "Oui",
    againstTrend: "Non",
    auto: "Automatique",
    win: "Win",
    loss: "Loss",
    be: "BE",
    periodWeek: "Semaine",
    periodMonth: "Mois",
    periodQuarter: "Trimestre",
    periodYear: "Année",
    calendarWeek: "Hebdomadaire",
    calendarMonth: "Mensuelle",
    calendarQuarter: "Trimestrielle",
    calendarYear: "Annuelle",
    metricTotalPerformance: "Performance totale",
    metricTrades: "Nombre de trades",
    metricWinsLosses: "Wins / Losses",
    metricStrategy: "Respect stratégie",
    metricAverageR: "Average P&L en R",
    metricAverageWin: "Average win en R",
    metricAverageLoss: "Average loss en R",
    metricMaxDrawdown: "Max drawdown",
    metricFees: "Frais payés",
    metricProfitFactor: "Profit factor",
    metricWinRate: "Win rate",
    metricAvgDuration: "Durée moyenne",
    metricBreakEven: "Break-even",
    metricProfitUsd: "P&L en $",
    metricProfitR: "P&L en R",
    metricGrossProfit: "Profit brut",
    metricFeesUsd: "Frais en $",
    metricFeesR: "Frais en R",
    metricMaxDdR: "Max DD en R",
    metricAvgPnlR: "Average P&L en R",
    metricAvgWinR: "Average win en R",
    metricAvgLossR: "Average loss en R",
    metricStrategyPct: "Respect stratégie en %",
    metricDuration: "Durée moyenne",
    metricResult: "Résultat",
    metricSide: "Type de position",
    metricTrend: "Tendance",
    metricSetup: "Setup",
    metricConfluence: "Confluence",
    metricAsset: "Actif",
    metricDay: "Jour",
    metricHour: "Heure",
    metricMonth: "Mois",
    metricGeneral: "Général",
    actionEdit: "Modifier",
    actionDelete: "Supprimer",
    actionViewImage: "Voir",
    durationPlaceholder: "Calcul automatique",
    imageEmpty: "Ajoutez une capture du trade",
    imageAttached: "Image attachée",
    confirmDelete: "Supprimer ce trade ?",
    tableDate: "Date",
    tableCategory: "Catégorie",
    tableAsset: "Actif",
    tableSide: "Ordre",
    tableTrend: "Tendance",
    tableRisk: "Risque $",
    tableFees: "Frais $",
    tableGross: "Profit brut $",
    tableNet: "P&L $",
    tableNetR: "P&L R",
    tableResult: "Résultat",
    tableSetup: "Setup",
    tableConfluence: "Confluence",
    tableStrategy: "Stratégie",
    tableDuration: "Durée",
    tableImage: "Image",
    tableComments: "Commentaires",
    tableActions: "Actions",
    statsGeneral: "Statistiques générales",
    statsByMonth: "Statistiques par mois",
    statsByDay: "Statistiques par jour de trading",
    statsByHour: "Statistiques par heure de trading",
    statsBySide: "Statistiques par type de position",
    statsByTrend: "Statistiques par tendance",
    statsBySetup: "Statistiques setup par setup",
    statsByConfluence: "Statistiques par confluence",
    statsByAsset: "Statistiques actif par actif",
    resultAutoHint: "Le résultat peut être forcé ou laissé en automatique selon le P&L net."
  },
  en: {
    appTitle: "Trading Journal Pro",
    heroEyebrow: "Automated trading journal",
    heroCopy:
      "Track a trading strategy in real time with one structured journal, automatic formulas, a filterable review workspace, and deep analytics by behavior, asset, and market context.",
    tabJournal: "Journal",
    tabReview: "Review",
    tabStatistics: "Statistics",
    journalKicker: "Trade capture",
    journalTitle: "Trading journal",
    resetForm: "Reset",
    fieldAsset: "Asset",
    fieldOpenDate: "Open date",
    fieldCloseDate: "Close date",
    fieldDuration: "Trade duration",
    fieldTimeframe: "Timeframe",
    fieldSide: "Trade order",
    fieldTrend: "With trend",
    fieldRR: "Position RR",
    fieldRiskUsd: "Risk in $",
    fieldRiskPct: "Risk in %",
    fieldFeesUsd: "Fees paid in $",
    fieldFeesR: "Fees paid in R",
    fieldGrossProfit: "Gross profit in $",
    fieldPnlUsd: "P&L in $",
    fieldPnlR: "P&L in R",
    fieldResult: "Trade result",
    fieldSetup: "Setup",
    fieldConfluence: "Confluence",
    fieldEmotionBefore: "Emotions before",
    fieldEmotionDuring: "Emotions during",
    fieldEmotionAfter: "Emotions after",
    fieldStrategyFollowed: "Strategy respected",
    fieldComments: "Comments",
    fieldImage: "Trade image",
    imagePreview: "Preview",
    previewFeesR: "Converted fees",
    previewPnlUsd: "Net P&L",
    previewPnlR: "P&L in R",
    previewResult: "Result",
    saveTrade: "Save trade",
    cancelEdit: "Cancel edit",
    journalSummaryKicker: "Quick reading",
    journalSummaryTitle: "Trade history",
    reviewKicker: "Performance analysis",
    reviewTitle: "Review by period",
    reviewPeriod: "Analysis period",
    reviewWeek: "Week",
    reviewMonth: "Month",
    reviewQuarter: "Quarter",
    reviewYear: "Year",
    calendarView: "Calendar view",
    calendarKicker: "Time summary",
    calendarTitle: "Performance calendar",
    chartKicker: "Strategy behavior",
    chartTitle: "Dynamic charts",
    chartWinRate: "Win rate",
    chartEquity: "Equity curve",
    chartAsset: "Asset performance",
    statisticsKicker: "Detailed data",
    statisticsTitle: "Statistics",
    heroTrades: "Trades",
    heroPnl: "Total P&L",
    heroWinRate: "Win rate",
    heroStrategy: "Strategy compliance",
    noTrades: "No trades saved yet.",
    emptyCalendar: "No data available for this calendar view.",
    emptyChart: "Not enough data to display this chart.",
    emptyTable: "No rows to display.",
    yes: "Yes",
    no: "No",
    long: "Buy",
    short: "Sell",
    withTrend: "Yes",
    againstTrend: "No",
    auto: "Automatic",
    win: "Win",
    loss: "Loss",
    be: "BE",
    periodWeek: "Week",
    periodMonth: "Month",
    periodQuarter: "Quarter",
    periodYear: "Year",
    calendarWeek: "Weekly",
    calendarMonth: "Monthly",
    calendarQuarter: "Quarterly",
    calendarYear: "Yearly",
    metricTotalPerformance: "Total performance",
    metricTrades: "Number of trades",
    metricWinsLosses: "Wins / Losses",
    metricStrategy: "Strategy compliance",
    metricAverageR: "Average P&L in R",
    metricAverageWin: "Average win in R",
    metricAverageLoss: "Average loss in R",
    metricMaxDrawdown: "Max drawdown",
    metricFees: "Fees paid",
    metricProfitFactor: "Profit factor",
    metricWinRate: "Win rate",
    metricAvgDuration: "Average duration",
    metricBreakEven: "Break-even",
    metricProfitUsd: "P&L in $",
    metricProfitR: "P&L in R",
    metricGrossProfit: "Gross profit",
    metricFeesUsd: "Fees in $",
    metricFeesR: "Fees in R",
    metricMaxDdR: "Max DD in R",
    metricAvgPnlR: "Average P&L in R",
    metricAvgWinR: "Average win in R",
    metricAvgLossR: "Average loss in R",
    metricStrategyPct: "Strategy compliance %",
    metricDuration: "Average duration",
    metricResult: "Result",
    metricSide: "Position type",
    metricTrend: "Trend",
    metricSetup: "Setup",
    metricConfluence: "Confluence",
    metricAsset: "Asset",
    metricDay: "Day",
    metricHour: "Hour",
    metricMonth: "Month",
    metricGeneral: "General",
    actionEdit: "Edit",
    actionDelete: "Delete",
    actionViewImage: "View",
    durationPlaceholder: "Automatic calculation",
    imageEmpty: "Attach a trade screenshot",
    imageAttached: "Image attached",
    confirmDelete: "Delete this trade?",
    tableDate: "Date",
    tableCategory: "Category",
    tableAsset: "Asset",
    tableSide: "Order",
    tableTrend: "Trend",
    tableRisk: "Risk $",
    tableFees: "Fees $",
    tableGross: "Gross profit $",
    tableNet: "P&L $",
    tableNetR: "P&L R",
    tableResult: "Result",
    tableSetup: "Setup",
    tableConfluence: "Confluence",
    tableStrategy: "Strategy",
    tableDuration: "Duration",
    tableImage: "Image",
    tableComments: "Comments",
    tableActions: "Actions",
    statsGeneral: "General statistics",
    statsByMonth: "Statistics by month",
    statsByDay: "Statistics by trading day",
    statsByHour: "Statistics by trading hour",
    statsBySide: "Statistics by position type",
    statsByTrend: "Statistics by trend context",
    statsBySetup: "Statistics by setup",
    statsByConfluence: "Statistics by confluence",
    statsByAsset: "Statistics by asset",
    resultAutoHint: "The result can be overridden or left automatic based on net P&L."
  }
};

const state = {
  language: "fr",
  activeTab: "journal",
  trades: [],
  editingTradeId: null,
  formImage: null,
  review: {
    period: "month",
    week: getWeekInputValue(new Date()),
    month: getMonthInputValue(new Date()),
    quarter: `Q${Math.floor(new Date().getMonth() / 3) + 1}`,
    year: String(new Date().getFullYear()),
    calendarGranularity: "week"
  }
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadState();
  hydrateStaticSelects();
  bindEvents();
  syncFormComputed();
  renderApp();
});

function cacheElements() {
  els.html = document.documentElement;
  els.heroKpis = document.getElementById("hero-kpis");
  els.tabButtons = [...document.querySelectorAll(".tab-btn")];
  els.langButtons = [...document.querySelectorAll(".lang-btn")];
  els.panels = [...document.querySelectorAll(".tab-panel")];
  els.tradeForm = document.getElementById("trade-form");
  els.resetFormBtn = document.getElementById("reset-form-btn");
  els.cancelEditBtn = document.getElementById("cancel-edit-btn");
  els.saveTradeBtn = document.getElementById("save-trade-btn");
  els.journalSummary = document.getElementById("journal-summary");
  els.journalHead = document.querySelector("#journal-table thead");
  els.journalBody = document.querySelector("#journal-table tbody");
  els.imagePreview = document.getElementById("image-preview");
  els.tradeImage = document.getElementById("tradeImage");
  els.duration = document.getElementById("duration");
  els.feesR = document.getElementById("feesR");
  els.pnlUsd = document.getElementById("pnlUsd");
  els.pnlR = document.getElementById("pnlR");
  els.previewFeesR = document.getElementById("preview-fees-r");
  els.previewPnlUsd = document.getElementById("preview-pnl-usd");
  els.previewPnlR = document.getElementById("preview-pnl-r");
  els.previewResult = document.getElementById("preview-result");
  els.reviewPeriod = document.getElementById("review-period");
  els.reviewWeek = document.getElementById("review-week");
  els.reviewMonth = document.getElementById("review-month");
  els.reviewQuarter = document.getElementById("review-quarter");
  els.reviewYear = document.getElementById("review-year");
  els.reviewPeriodWeekWrap = document.getElementById("review-period-week-wrap");
  els.reviewPeriodMonthWrap = document.getElementById("review-period-month-wrap");
  els.reviewPeriodQuarterWrap = document.getElementById("review-period-quarter-wrap");
  els.reviewPeriodYearWrap = document.getElementById("review-period-year-wrap");
  els.calendarGranularity = document.getElementById("calendar-granularity");
  els.reviewDashboard = document.getElementById("review-dashboard");
  els.calendarGrid = document.getElementById("calendar-grid");
  els.winrateChart = document.getElementById("winrate-chart");
  els.equityChart = document.getElementById("equity-chart");
  els.assetChart = document.getElementById("asset-chart");
  els.statisticsSections = document.getElementById("statistics-sections");
  els.imageModal = document.getElementById("image-modal");
  els.modalImage = document.getElementById("modal-image");
  els.closeImageModal = document.getElementById("close-image-modal");
}

function bindEvents() {
  els.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.language;
      persistState();
      renderApp();
    });
  });

  els.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      renderTabs();
    });
  });

  els.tradeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = collectFormData();
    const trade = buildTradeFromForm(formData);

    if (state.editingTradeId) {
      state.trades = state.trades.map((item) => (item.id === state.editingTradeId ? trade : item));
    } else {
      state.trades.unshift(trade);
    }

    persistState();
    resetForm();
    renderApp();
  });

  els.resetFormBtn.addEventListener("click", resetForm);
  els.cancelEditBtn.addEventListener("click", resetForm);

  ["openDate", "closeDate", "riskUsd", "feesUsd", "grossProfitUsd", "result"].forEach((id) => {
    document.getElementById(id).addEventListener("input", syncFormComputed);
    document.getElementById(id).addEventListener("change", syncFormComputed);
  });

  els.tradeImage.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      state.formImage = state.editingTradeId
        ? state.trades.find((trade) => trade.id === state.editingTradeId)?.image || null
        : null;
      renderImagePreview();
      return;
    }

    state.formImage = {
      name: file.name,
      dataUrl: await readFileAsDataUrl(file)
    };
    renderImagePreview();
  });

  [els.reviewPeriod, els.reviewWeek, els.reviewMonth, els.reviewQuarter, els.reviewYear, els.calendarGranularity].forEach(
    (element) => {
      element.addEventListener("input", handleReviewControls);
      element.addEventListener("change", handleReviewControls);
    }
  );

  els.closeImageModal.addEventListener("click", () => els.imageModal.close());
  els.imageModal.addEventListener("click", (event) => {
    if (event.target === els.imageModal) {
      els.imageModal.close();
    }
  });
}

function hydrateStaticSelects() {
  renderSelectOptions();
  els.reviewWeek.value = state.review.week;
  els.reviewMonth.value = state.review.month;
  els.reviewQuarter.value = `${state.review.year}-${state.review.quarter}`;
  els.reviewYear.value = state.review.year;
  els.reviewPeriod.value = state.review.period;
  els.calendarGranularity.value = state.review.calendarGranularity;
}

function renderApp() {
  applyTranslations();
  renderSelectOptions();
  renderTabs();
  renderHeroKpis();
  renderImagePreview();
  renderJournalSummary();
  renderJournalTable();
  renderReview();
  renderStatistics();
  syncFormComputed();
}

function applyTranslations() {
  const language = state.language;
  els.html.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.getElementById("duration").placeholder = t("durationPlaceholder");
}

function renderTabs() {
  els.tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  });

  els.panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `tab-${state.activeTab}`);
  });

  els.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.language);
  });
}

function renderSelectOptions() {
  setOptions("side", [
    { value: "long", label: t("long") },
    { value: "short", label: t("short") }
  ]);

  setOptions("trend", [
    { value: "withTrend", label: t("withTrend") },
    { value: "againstTrend", label: t("againstTrend") }
  ]);

  setOptions("strategyFollowed", [
    { value: "yes", label: t("yes") },
    { value: "no", label: t("no") }
  ]);

  setOptions("result", [
    { value: "auto", label: t("auto") },
    { value: "win", label: t("win") },
    { value: "loss", label: t("loss") },
    { value: "be", label: t("be") }
  ]);

  setOptions("review-period", [
    { value: "week", label: t("periodWeek") },
    { value: "month", label: t("periodMonth") },
    { value: "quarter", label: t("periodQuarter") },
    { value: "year", label: t("periodYear") }
  ]);

  setOptions("calendar-granularity", [
    { value: "week", label: t("calendarWeek") },
    { value: "month", label: t("calendarMonth") },
    { value: "quarter", label: t("calendarQuarter") },
    { value: "year", label: t("calendarYear") }
  ]);

  const anchorYear = Number(state.review.year) || new Date().getFullYear();
  const quarterOptions = [];
  for (let year = anchorYear - 5; year <= anchorYear + 1; year += 1) {
    ["Q1", "Q2", "Q3", "Q4"].forEach((quarter) => {
      quarterOptions.push({
        value: `${year}-${quarter}`,
        label: `${quarter} ${year}`
      });
    });
  }
  setOptions("review-quarter", quarterOptions);

  document.getElementById("result").title = t("resultAutoHint");
}

function renderHeroKpis() {
  const metrics = computeMetrics(state.trades);
  const cards = [
    { label: t("heroTrades"), value: metrics.totalTrades },
    { label: t("heroPnl"), value: formatCurrency(metrics.totalPnlUsd) },
    { label: t("heroWinRate"), value: formatPercent(metrics.winRate) },
    { label: t("heroStrategy"), value: formatPercent(metrics.strategyPct) }
  ];

  els.heroKpis.innerHTML = cards
    .map(
      (card) => `
        <article class="hero-kpi-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderJournalSummary() {
  const metrics = computeMetrics(state.trades);
  const pills = [
    `${t("metricTrades")}: <strong>${metrics.totalTrades}</strong>`,
    `${t("metricWinRate")}: <strong>${formatPercent(metrics.winRate)}</strong>`,
    `${t("metricProfitUsd")}: <strong>${formatCurrency(metrics.totalPnlUsd)}</strong>`,
    `${t("metricProfitR")}: <strong>${formatR(metrics.totalPnlR)}</strong>`
  ];

  els.journalSummary.innerHTML = pills.map((item) => `<div class="badge yes">${item}</div>`).join("");
}

function renderJournalTable() {
  const headers = [
    t("tableDate"),
    t("tableAsset"),
    t("tableSide"),
    t("tableTrend"),
    t("tableRisk"),
    t("tableFees"),
    t("tableGross"),
    t("tableNet"),
    t("tableNetR"),
    t("tableResult"),
    t("tableSetup"),
    t("tableConfluence"),
    t("tableStrategy"),
    t("tableDuration"),
    t("tableImage"),
    t("tableComments"),
    t("tableActions")
  ];

  els.journalHead.innerHTML = `<tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>`;

  if (!state.trades.length) {
    els.journalBody.innerHTML = `<tr><td colspan="${headers.length}"><div class="empty-state">${t("noTrades")}</div></td></tr>`;
    return;
  }

  els.journalBody.innerHTML = state.trades
    .map((trade) => {
      const enriched = computeTrade(trade);
      const trendLabel = trade.trend === "withTrend" ? t("yes") : t("no");
      const strategyLabel = trade.strategyFollowed === "yes" ? t("yes") : t("no");
      const imageCell = trade.image?.dataUrl
        ? `<img class="table-thumb" src="${trade.image.dataUrl}" alt="${escapeHtml(trade.asset)}" data-image="${trade.id}" />`
        : `<span class="table-empty">-</span>`;

      return `
        <tr>
          <td>${formatDateTime(trade.tradeDate)}</td>
          <td><strong>${escapeHtml(trade.asset)}</strong><br><span class="table-empty">${escapeHtml(trade.timeframe || "-")}</span></td>
          <td>${renderBadge(enriched.sideLabel, trade.side)}</td>
          <td>${renderBadge(trendLabel, trade.trend === "withTrend" ? "yes" : "no")}</td>
          <td>${formatCurrency(trade.riskUsd)}</td>
          <td>${formatCurrency(trade.feesUsd)}</td>
          <td>${formatCurrency(trade.grossProfitUsd)}</td>
          <td class="${profitClass(enriched.pnlUsd)}">${formatCurrency(enriched.pnlUsd)}</td>
          <td class="${profitClass(enriched.pnlR)}">${formatR(enriched.pnlR)}</td>
          <td>${renderBadge(resultLabel(enriched.result), enriched.result)}</td>
          <td>${escapeHtml(trade.setup || "-")}</td>
          <td>${escapeHtml(trade.confluence || "-")}</td>
          <td>${renderBadge(strategyLabel, trade.strategyFollowed)}</td>
          <td>${escapeHtml(trade.durationLabel)}</td>
          <td>${imageCell}</td>
          <td>${escapeHtml(trade.comments || "-")}</td>
          <td>
            <div class="table-actions">
              <button class="icon-btn" data-action="edit" data-id="${trade.id}">${t("actionEdit")}</button>
              <button class="icon-btn" data-action="delete" data-id="${trade.id}">${t("actionDelete")}</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  els.journalBody.querySelectorAll('[data-action="edit"]').forEach((button) => {
    button.addEventListener("click", () => loadTradeIntoForm(button.dataset.id));
  });

  els.journalBody.querySelectorAll('[data-action="delete"]').forEach((button) => {
    button.addEventListener("click", () => deleteTrade(button.dataset.id));
  });

  els.journalBody.querySelectorAll("[data-image]").forEach((img) => {
    img.addEventListener("click", () => openImageModal(img.dataset.image));
  });
}

function renderReview() {
  syncReviewVisibility();
  const filteredTrades = getReviewTrades();
  const metrics = computeMetrics(filteredTrades);

  const cards = [
    {
      label: t("metricTotalPerformance"),
      value: formatCurrency(metrics.totalPnlUsd),
      sub: formatR(metrics.totalPnlR),
      tone: metrics.totalPnlUsd
    },
    {
      label: t("metricTrades"),
      value: `${metrics.totalTrades}`,
      sub: `${t("metricWinRate")}: ${formatPercent(metrics.winRate)}`
    },
    {
      label: t("metricWinsLosses"),
      value: `${metrics.wins} / ${metrics.losses}`,
      sub: `BE: ${metrics.be}`
    },
    {
      label: t("metricStrategy"),
      value: formatPercent(metrics.strategyPct),
      sub: `${metrics.strategyRespected}/${metrics.totalTrades || 0}`
    },
    {
      label: t("metricAverageR"),
      value: formatR(metrics.averagePnlR),
      sub: `${t("metricAverageWin")}: ${formatR(metrics.averageWinR)}`,
      tone: metrics.averagePnlR
    },
    {
      label: t("metricAverageWin"),
      value: formatR(metrics.averageWinR),
      sub: `${metrics.wins} W`,
      tone: metrics.averageWinR
    },
    {
      label: t("metricAverageLoss"),
      value: formatR(metrics.averageLossR),
      sub: `${metrics.losses} L`,
      tone: metrics.averageLossR
    },
    {
      label: t("metricMaxDrawdown"),
      value: formatR(metrics.maxDrawdownR),
      sub: `${t("metricAvgDuration")}: ${formatDuration(metrics.averageDurationMinutes)}`,
      tone: -Math.abs(metrics.maxDrawdownR)
    },
    {
      label: t("metricFees"),
      value: formatCurrency(metrics.totalFeesUsd),
      sub: formatR(metrics.totalFeesR),
      tone: -Math.abs(metrics.totalFeesUsd)
    },
    {
      label: t("metricProfitFactor"),
      value: formatFactor(metrics.profitFactor),
      sub: `${t("metricBreakEven")}: ${metrics.be}`
    }
  ];

  els.reviewDashboard.innerHTML = cards
    .map(
      (card) => `
        <article class="metric-card">
          <p>${card.label}</p>
          <strong class="${card.tone !== undefined ? profitClass(card.tone) : ""}">${card.value}</strong>
          <span class="sub-metric">${card.sub}</span>
        </article>
      `
    )
    .join("");

  renderCalendar(filteredTrades);
  renderWinRateChart(metrics);
  renderEquityChart(filteredTrades);
  renderAssetChart(filteredTrades);
}

function renderCalendar(trades) {
  const grouped = groupTradesForCalendar(trades, state.review.calendarGranularity);

  if (!grouped.length) {
    els.calendarGrid.innerHTML = `<div class="empty-state">${t("emptyCalendar")}</div>`;
    return;
  }

  els.calendarGrid.innerHTML = grouped
    .map((group) => {
      const metrics = computeMetrics(group.trades);
      return `
        <article class="calendar-card">
          <h3>${group.label}</h3>
          <p>${t("metricTrades")}: <strong>${metrics.totalTrades}</strong></p>
          <p>${t("metricWinRate")}: <strong>${formatPercent(metrics.winRate)}</strong></p>
          <p>${t("metricProfitUsd")}: <strong class="${profitClass(metrics.totalPnlUsd)}">${formatCurrency(
            metrics.totalPnlUsd
          )}</strong></p>
          <p>${t("metricProfitR")}: <strong class="${profitClass(metrics.totalPnlR)}">${formatR(metrics.totalPnlR)}</strong></p>
        </article>
      `;
    })
    .join("");
}

function renderWinRateChart(metrics) {
  if (!metrics.totalTrades) {
    els.winrateChart.innerHTML = `<div class="empty-state">${t("emptyChart")}</div>`;
    return;
  }

  const label = `${formatPercent(metrics.winRate)}\n${t("metricWinRate")}`;
  els.winrateChart.innerHTML = `
    <div class="donut-wrap">
      <div class="donut" style="--percent:${metrics.winRate.toFixed(2)}" data-label="${label}"></div>
    </div>
  `;
}

function renderEquityChart(trades) {
  if (!trades.length) {
    els.equityChart.innerHTML = `<div class="empty-state">${t("emptyChart")}</div>`;
    return;
  }

  const sorted = [...trades].sort((a, b) => new Date(a.tradeDate) - new Date(b.tradeDate));
  let cumulative = 0;
  const points = sorted.map((trade, index) => {
    cumulative += computeTrade(trade).pnlR;
    return { index, value: cumulative, label: formatShortDate(trade.tradeDate) };
  });

  const values = points.map((point) => point.value);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 0);
  const width = 720;
  const height = 260;
  const paddingX = 28;
  const paddingY = 24;
  const range = max - min || 1;

  const svgPoints = points
    .map((point, index) => {
      const x = paddingX + (index / Math.max(points.length - 1, 1)) * (width - paddingX * 2);
      const y = height - paddingY - ((point.value - min) / range) * (height - paddingY * 2);
      return { x, y };
    })
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const firstPoint = svgPoints.split(" ")[0] || `${paddingX},${height - paddingY}`;
  const lastPoint = svgPoints.split(" ").slice(-1)[0] || `${width - paddingX},${height - paddingY}`;
  const areaPoints = `${firstPoint} ${svgPoints} ${lastPoint} ${width - paddingX},${height - paddingY} ${paddingX},${
    height - paddingY
  }`;

  els.equityChart.innerHTML = `
    <div class="equity-chart-wrap">
      <svg class="equity-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="${t("chartEquity")}">
        <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="rgba(31,45,46,0.12)" />
        <line x1="${paddingX}" y1="${paddingY}" x2="${paddingX}" y2="${height - paddingY}" stroke="rgba(31,45,46,0.12)" />
        <polyline class="equity-area" points="${areaPoints}" />
        <polyline class="equity-path" points="${svgPoints}" />
        <text class="equity-axis" x="${paddingX}" y="${paddingY - 6}">${formatR(max)}</text>
        <text class="equity-axis" x="${paddingX}" y="${height - 6}">${formatR(min)}</text>
      </svg>
      <div class="chart-note">${t("metricProfitR")}: ${formatR(values.at(-1) || 0)}</div>
    </div>
  `;
}

function renderAssetChart(trades) {
  if (!trades.length) {
    els.assetChart.innerHTML = `<div class="empty-state">${t("emptyChart")}</div>`;
    return;
  }

  const grouped = groupBy(trades, (trade) => trade.asset || "-");
  const rows = Object.entries(grouped)
    .map(([asset, assetTrades]) => ({
      asset,
      pnlR: computeMetrics(assetTrades).totalPnlR
    }))
    .sort((a, b) => b.pnlR - a.pnlR);

  const maxAbs = Math.max(...rows.map((row) => Math.abs(row.pnlR)), 1);

  els.assetChart.innerHTML = `
    <div class="bar-stack">
      ${rows
        .map((row) => {
          const width = (Math.abs(row.pnlR) / maxAbs) * 100;
          const klass = row.pnlR < 0 ? "loss" : row.pnlR > 0 ? "win" : "";
          return `
            <div class="bar-row">
              <strong>${escapeHtml(row.asset)}</strong>
              <div class="bar-track">
                <div class="bar-fill ${klass}" style="width:${width}%"></div>
              </div>
              <span class="${profitClass(row.pnlR)}">${formatR(row.pnlR)}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStatistics() {
  const sections = [
    { title: t("statsGeneral"), rows: [buildRow(t("metricGeneral"), state.trades)] },
    { title: t("statsByMonth"), rows: buildMonthRows(state.trades) },
    { title: t("statsByDay"), rows: buildWeekdayRows(state.trades) },
    { title: t("statsByHour"), rows: buildHourRows(state.trades) },
    {
      title: t("statsBySide"),
      rows: buildGroupedRows(groupBy(state.trades, (trade) => (trade.side === "long" ? t("long") : t("short"))))
    },
    {
      title: t("statsByTrend"),
      rows: buildGroupedRows(groupBy(state.trades, (trade) => (trade.trend === "withTrend" ? t("yes") : t("no"))))
    },
    { title: t("statsBySetup"), rows: buildGroupedRows(groupBy(state.trades, (trade) => trade.setup || "-")) },
    { title: t("statsByConfluence"), rows: buildGroupedRows(groupBySplit(state.trades, (trade) => trade.confluence || "-")) },
    { title: t("statsByAsset"), rows: buildGroupedRows(groupBy(state.trades, (trade) => trade.asset || "-")) }
  ];

  els.statisticsSections.innerHTML = sections
    .map((section) => renderStatSection(section.title, section.rows))
    .join("");
}

function renderStatSection(title, rows) {
  const headers = [
    t("tableCategory"),
    t("metricTrades"),
    "Wins",
    "Losses",
    "BE",
    t("metricWinRate"),
    t("metricProfitUsd"),
    t("metricProfitR"),
    t("metricAvgPnlR"),
    t("metricAvgWinR"),
    t("metricAvgLossR"),
    t("metricFeesUsd"),
    t("metricFeesR"),
    t("metricMaxDdR"),
    t("metricDuration"),
    t("metricStrategyPct")
  ];

  const body = rows.length
    ? rows
        .map(
          (row) => `
            <tr>
              <td><strong>${escapeHtml(row.label)}</strong></td>
              <td>${row.totalTrades}</td>
              <td>${row.wins}</td>
              <td>${row.losses}</td>
              <td>${row.be}</td>
              <td>${formatPercent(row.winRate)}</td>
              <td class="${profitClass(row.totalPnlUsd)}">${formatCurrency(row.totalPnlUsd)}</td>
              <td class="${profitClass(row.totalPnlR)}">${formatR(row.totalPnlR)}</td>
              <td>${formatR(row.averagePnlR)}</td>
              <td>${formatR(row.averageWinR)}</td>
              <td>${formatR(row.averageLossR)}</td>
              <td>${formatCurrency(row.totalFeesUsd)}</td>
              <td>${formatR(row.totalFeesR)}</td>
              <td>${formatR(row.maxDrawdownR)}</td>
              <td>${formatDuration(row.averageDurationMinutes)}</td>
              <td>${formatPercent(row.strategyPct)}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="${headers.length}">${t("emptyTable")}</td></tr>`;

  return `
    <article class="stat-card">
      <h3>${title}</h3>
      <div class="table-wrap">
        <table class="stat-table">
          <thead>
            <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </article>
  `;
}

function collectFormData() {
  const form = new FormData(els.tradeForm);
  return Object.fromEntries(form.entries());
}

function buildTradeFromForm(formData) {
  const openDate = formData.openDate;
  const closeDate = formData.closeDate;
  const durationMinutes = calculateDurationMinutes(openDate, closeDate);

  const base = {
    id: state.editingTradeId || crypto.randomUUID(),
    asset: (formData.asset || "").trim(),
    openDate,
    closeDate,
    tradeDate: closeDate || openDate,
    durationMinutes,
    durationLabel: formatDuration(durationMinutes),
    timeframe: (formData.timeframe || "").trim(),
    side: formData.side || "long",
    trend: formData.trend || "withTrend",
    rr: parseNumber(formData.rr),
    riskUsd: parseNumber(formData.riskUsd),
    riskPct: parseNumber(formData.riskPct),
    feesUsd: parseNumber(formData.feesUsd),
    grossProfitUsd: parseNumber(formData.grossProfitUsd),
    resultMode: formData.result || "auto",
    setup: (formData.setup || "").trim(),
    confluence: (formData.confluence || "").trim(),
    emotionBefore: (formData.emotionBefore || "").trim(),
    emotionDuring: (formData.emotionDuring || "").trim(),
    emotionAfter: (formData.emotionAfter || "").trim(),
    strategyFollowed: formData.strategyFollowed || "yes",
    comments: (formData.comments || "").trim(),
    image: state.formImage
  };

  return {
    ...base,
    ...computeTrade(base)
  };
}

function computeTrade(trade) {
  const riskUsd = parseNumber(trade.riskUsd);
  const feesUsd = parseNumber(trade.feesUsd);
  const grossProfitUsd = parseNumber(trade.grossProfitUsd);
  const pnlUsd = grossProfitUsd - feesUsd;
  const feesR = riskUsd > 0 ? feesUsd / riskUsd : 0;
  const pnlR = riskUsd > 0 ? pnlUsd / riskUsd : 0;
  const result = resolveResult(trade.resultMode || trade.result || "auto", pnlUsd);

  return {
    feesR,
    pnlUsd,
    pnlR,
    result,
    sideLabel: trade.side === "long" ? t("long") : t("short")
  };
}

function computeMetrics(trades) {
  const sortedTrades = [...trades].sort((a, b) => new Date(a.tradeDate) - new Date(b.tradeDate));
  let cumulativeR = 0;
  let peak = 0;
  let maxDrawdownR = 0;

  const totals = sortedTrades.reduce(
    (accumulator, trade) => {
      const enriched = computeTrade(trade);
      accumulator.totalTrades += 1;
      accumulator.totalPnlUsd += enriched.pnlUsd;
      accumulator.totalPnlR += enriched.pnlR;
      accumulator.totalFeesUsd += parseNumber(trade.feesUsd);
      accumulator.totalFeesR += enriched.feesR;
      accumulator.totalGrossProfitUsd += parseNumber(trade.grossProfitUsd);
      accumulator.totalDurationMinutes += parseNumber(trade.durationMinutes);
      accumulator.strategyRespected += trade.strategyFollowed === "yes" ? 1 : 0;

      if (enriched.result === "win") {
        accumulator.wins += 1;
        accumulator.sumWinsR += enriched.pnlR;
      } else if (enriched.result === "loss") {
        accumulator.losses += 1;
        accumulator.sumLossesR += enriched.pnlR;
      } else {
        accumulator.be += 1;
      }

      cumulativeR += enriched.pnlR;
      peak = Math.max(peak, cumulativeR);
      maxDrawdownR = Math.max(maxDrawdownR, peak - cumulativeR);

      return accumulator;
    },
    {
      totalTrades: 0,
      wins: 0,
      losses: 0,
      be: 0,
      totalPnlUsd: 0,
      totalPnlR: 0,
      totalFeesUsd: 0,
      totalFeesR: 0,
      totalGrossProfitUsd: 0,
      totalDurationMinutes: 0,
      strategyRespected: 0,
      sumWinsR: 0,
      sumLossesR: 0
    }
  );

  const grossWins = sortedTrades.reduce((sum, trade) => {
    const pnlUsd = computeTrade(trade).pnlUsd;
    return pnlUsd > 0 ? sum + pnlUsd : sum;
  }, 0);

  const grossLosses = sortedTrades.reduce((sum, trade) => {
    const pnlUsd = computeTrade(trade).pnlUsd;
    return pnlUsd < 0 ? sum + Math.abs(pnlUsd) : sum;
  }, 0);

  return {
    ...totals,
    winRate: totals.totalTrades ? (totals.wins / totals.totalTrades) * 100 : 0,
    averagePnlR: totals.totalTrades ? totals.totalPnlR / totals.totalTrades : 0,
    averageWinR: totals.wins ? totals.sumWinsR / totals.wins : 0,
    averageLossR: totals.losses ? totals.sumLossesR / totals.losses : 0,
    strategyPct: totals.totalTrades ? (totals.strategyRespected / totals.totalTrades) * 100 : 0,
    maxDrawdownR,
    averageDurationMinutes: totals.totalTrades ? totals.totalDurationMinutes / totals.totalTrades : 0,
    profitFactor: grossLosses ? grossWins / grossLosses : grossWins > 0 ? Infinity : 0
  };
}

function buildGroupedRows(groups) {
  return Object.entries(groups)
    .filter(([label]) => label)
    .map(([label, trades]) => buildRow(label, trades))
    .sort((a, b) => {
      if (a.label === "-" && b.label !== "-") return 1;
      if (b.label === "-" && a.label !== "-") return -1;
      return String(a.label).localeCompare(String(b.label), state.language);
    });
}

function buildRow(label, trades) {
  return {
    label,
    ...computeMetrics(trades)
  };
}

function buildMonthRows(trades) {
  const grouped = groupBy(trades, (trade) => {
    if (!trade.tradeDate) return "-";
    const date = new Date(trade.tradeDate);
    return Number.isNaN(date.getTime()) ? "-" : getMonthInputValue(date);
  });

  return Object.entries(grouped)
    .map(([key, groupedTrades]) => ({
      sortKey: key,
      label: key === "-" ? "-" : labelForGranularity(key, "month"),
      ...computeMetrics(groupedTrades)
    }))
    .sort((a, b) => String(a.sortKey).localeCompare(String(b.sortKey)));
}

function buildWeekdayRows(trades) {
  const grouped = trades.reduce((accumulator, trade) => {
    if (!trade.tradeDate) {
      accumulator["-"] ||= [];
      accumulator["-"].push(trade);
      return accumulator;
    }

    const date = new Date(trade.tradeDate);
    if (Number.isNaN(date.getTime())) {
      accumulator["-"] ||= [];
      accumulator["-"].push(trade);
      return accumulator;
    }

    const weekday = ((date.getDay() + 6) % 7) + 1;
    accumulator[weekday] ||= [];
    accumulator[weekday].push(trade);
    return accumulator;
  }, {});

  return Object.entries(grouped)
    .map(([key, groupedTrades]) => {
      const weekday = Number(key);
      const label =
        key === "-"
          ? "-"
          : new Intl.DateTimeFormat(state.language, { weekday: "long" }).format(new Date(2024, 0, weekday));
      return {
        sortKey: key === "-" ? 99 : weekday,
        label,
        ...computeMetrics(groupedTrades)
      };
    })
    .sort((a, b) => a.sortKey - b.sortKey);
}

function buildHourRows(trades) {
  const grouped = groupBy(trades, (trade) => hourLabel(trade.openDate || trade.tradeDate));

  return Object.entries(grouped)
    .map(([key, groupedTrades]) => ({
      sortKey: key === "-" ? 99 : Number.parseInt(key, 10),
      label: key,
      ...computeMetrics(groupedTrades)
    }))
    .sort((a, b) => a.sortKey - b.sortKey);
}

function handleReviewControls() {
  state.review.period = els.reviewPeriod.value;
  state.review.week = els.reviewWeek.value || state.review.week;
  state.review.month = els.reviewMonth.value || state.review.month;
  const [quarterYear, quarter] = (els.reviewQuarter.value || `${state.review.year}-${state.review.quarter}`).split("-");
  state.review.quarter = quarter || state.review.quarter;
  if (state.review.period === "quarter") {
    state.review.year = quarterYear || state.review.year;
  } else if (state.review.period === "year") {
    state.review.year = els.reviewYear.value || state.review.year;
  } else {
    state.review.year = els.reviewYear.value || quarterYear || state.review.year;
  }
  state.review.calendarGranularity = els.calendarGranularity.value;
  renderSelectOptions();
  persistState();
  renderReview();
}

function syncReviewVisibility() {
  els.reviewPeriodWeekWrap.hidden = state.review.period !== "week";
  els.reviewPeriodMonthWrap.hidden = state.review.period !== "month";
  els.reviewPeriodQuarterWrap.hidden = state.review.period !== "quarter";
  els.reviewPeriodYearWrap.hidden = state.review.period !== "year";

  els.reviewPeriod.value = state.review.period;
  els.reviewWeek.value = state.review.week;
  els.reviewMonth.value = state.review.month;
  els.reviewQuarter.value = `${state.review.year}-${state.review.quarter}`;
  els.reviewYear.value = state.review.year;
  els.calendarGranularity.value = state.review.calendarGranularity;
}

function getReviewTrades() {
  return state.trades.filter((trade) => matchesReviewPeriod(trade.tradeDate, state.review));
}

function matchesReviewPeriod(tradeDate, review) {
  if (!tradeDate) return false;
  const date = new Date(tradeDate);
  if (Number.isNaN(date.getTime())) return false;

  if (review.period === "week") {
    return getWeekInputValue(date) === review.week;
  }

  if (review.period === "month") {
    return getMonthInputValue(date) === review.month;
  }

  if (review.period === "quarter") {
    const quarter = `Q${Math.floor(date.getMonth() / 3) + 1}`;
    return String(date.getFullYear()) === review.year && quarter === review.quarter;
  }

  if (review.period === "year") {
    return String(date.getFullYear()) === review.year;
  }

  return true;
}

function groupTradesForCalendar(trades, granularity) {
  const grouped = groupBy(trades, (trade) => {
    const date = new Date(trade.tradeDate);
    if (granularity === "week") return getWeekInputValue(date);
    if (granularity === "month") return getMonthInputValue(date);
    if (granularity === "quarter") return `${date.getFullYear()}-Q${Math.floor(date.getMonth() / 3) + 1}`;
    return String(date.getFullYear());
  });

  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, groupedTrades]) => ({
      label: labelForGranularity(key, granularity),
      trades: groupedTrades
    }));
}

function labelForGranularity(key, granularity) {
  if (granularity === "week") {
    return key;
  }

  if (granularity === "month") {
    const [year, month] = key.split("-");
    return new Intl.DateTimeFormat(state.language, { month: "long", year: "numeric" }).format(new Date(`${year}-${month}-01`));
  }

  if (granularity === "quarter") {
    return key.replace("-", " ");
  }

  return key;
}

function loadTradeIntoForm(id) {
  const trade = state.trades.find((item) => item.id === id);
  if (!trade) return;

  state.editingTradeId = id;
  state.formImage = trade.image || null;

  setFieldValue("asset", trade.asset);
  setFieldValue("openDate", trade.openDate);
  setFieldValue("closeDate", trade.closeDate);
  setFieldValue("timeframe", trade.timeframe);
  setFieldValue("side", trade.side);
  setFieldValue("trend", trade.trend);
  setFieldValue("rr", trade.rr);
  setFieldValue("riskUsd", trade.riskUsd);
  setFieldValue("riskPct", trade.riskPct);
  setFieldValue("feesUsd", trade.feesUsd);
  setFieldValue("grossProfitUsd", trade.grossProfitUsd);
  setFieldValue("result", trade.resultMode || "auto");
  setFieldValue("setup", trade.setup);
  setFieldValue("confluence", trade.confluence);
  setFieldValue("emotionBefore", trade.emotionBefore);
  setFieldValue("emotionDuring", trade.emotionDuring);
  setFieldValue("emotionAfter", trade.emotionAfter);
  setFieldValue("strategyFollowed", trade.strategyFollowed);
  setFieldValue("comments", trade.comments);
  els.tradeImage.value = "";

  syncFormComputed();
  renderImagePreview();
  els.tradeForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteTrade(id) {
  if (!window.confirm(t("confirmDelete"))) return;
  state.trades = state.trades.filter((trade) => trade.id !== id);
  if (state.editingTradeId === id) {
    resetForm();
  }
  persistState();
  renderApp();
}

function resetForm() {
  els.tradeForm.reset();
  state.editingTradeId = null;
  state.formImage = null;
  setFieldValue("side", "long");
  setFieldValue("trend", "withTrend");
  setFieldValue("result", "auto");
  setFieldValue("strategyFollowed", "yes");
  els.tradeImage.value = "";
  syncFormComputed();
  renderImagePreview();
}

function syncFormComputed() {
  const openDate = document.getElementById("openDate").value;
  const closeDate = document.getElementById("closeDate").value;
  const riskUsd = parseNumber(document.getElementById("riskUsd").value);
  const feesUsd = parseNumber(document.getElementById("feesUsd").value);
  const grossProfitUsd = parseNumber(document.getElementById("grossProfitUsd").value);
  const resultMode = document.getElementById("result").value || "auto";

  const durationMinutes = calculateDurationMinutes(openDate, closeDate);
  const pnlUsd = grossProfitUsd - feesUsd;
  const feesR = riskUsd > 0 ? feesUsd / riskUsd : 0;
  const pnlR = riskUsd > 0 ? pnlUsd / riskUsd : 0;
  const result = resolveResult(resultMode, pnlUsd);

  els.duration.value = formatDuration(durationMinutes);
  els.feesR.value = formatR(feesR);
  els.pnlUsd.value = formatCurrency(pnlUsd);
  els.pnlR.value = formatR(pnlR);
  els.previewFeesR.textContent = formatR(feesR);
  els.previewPnlUsd.textContent = formatCurrency(pnlUsd);
  els.previewPnlR.textContent = formatR(pnlR);
  els.previewResult.textContent = resultLabel(result);
}

function renderImagePreview() {
  if (!state.formImage?.dataUrl) {
    els.imagePreview.classList.add("empty");
    els.imagePreview.innerHTML = `<span>${t("imageEmpty")}</span>`;
    return;
  }

  els.imagePreview.classList.remove("empty");
  els.imagePreview.innerHTML = `<img src="${state.formImage.dataUrl}" alt="${escapeHtml(
    state.formImage.name || t("imageAttached")
  )}" />`;
}

function openImageModal(tradeId) {
  const trade = state.trades.find((item) => item.id === tradeId);
  if (!trade?.image?.dataUrl) return;
  els.modalImage.src = trade.image.dataUrl;
  els.imageModal.showModal();
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      language: state.language,
      trades: state.trades,
      review: state.review
    })
  );
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return resetForm();

  try {
    const parsed = JSON.parse(raw);
    state.language = parsed.language || "fr";
    state.trades = Array.isArray(parsed.trades) ? parsed.trades : [];
    state.review = { ...state.review, ...(parsed.review || {}) };
  } catch (error) {
    console.error("Unable to load persisted state", error);
  }

  resetForm();
}

function setOptions(id, options) {
  const select = document.getElementById(id);
  const previousValue = select.value;
  select.innerHTML = options
    .map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`)
    .join("");

  const hasPrevious = options.some((option) => option.value === previousValue);
  if (hasPrevious) {
    select.value = previousValue;
  }
}

function setFieldValue(id, value) {
  document.getElementById(id).value = value ?? "";
}

function parseNumber(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function calculateDurationMinutes(openDate, closeDate) {
  if (!openDate || !closeDate) return 0;
  const open = new Date(openDate);
  const close = new Date(closeDate);
  const diff = close.getTime() - open.getTime();
  return diff > 0 ? diff / 60000 : 0;
}

function formatDuration(minutes) {
  const totalMinutes = Math.round(parseNumber(minutes));
  if (!totalMinutes) return "--";
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const mins = totalMinutes % 60;
  const parts = [];

  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);
  if (mins || !parts.length) parts.push(`${mins}m`);
  return parts.join(" ");
}

function formatCurrency(value) {
  const number = parseNumber(value);
  return new Intl.NumberFormat(state.language, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(number);
}

function formatR(value) {
  return `${parseNumber(value).toFixed(2)} R`;
}

function formatPercent(value) {
  return `${parseNumber(value).toFixed(1)}%`;
}

function formatFactor(value) {
  if (value === Infinity) return "∞";
  return parseNumber(value).toFixed(2);
}

function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat(state.language, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function formatShortDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat(state.language, {
    month: "short",
    day: "numeric"
  }).format(date);
}

function formatMonthKey(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat(state.language, {
    month: "long",
    year: "numeric"
  }).format(date);
}

function weekdayLabel(value, language) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat(language, { weekday: "long" }).format(date);
}

function hourLabel(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return `${String(date.getHours()).padStart(2, "0")}:00`;
}

function resolveResult(mode, pnlUsd) {
  if (mode && mode !== "auto") return mode;
  if (pnlUsd > 0) return "win";
  if (pnlUsd < 0) return "loss";
  return "be";
}

function resultLabel(result) {
  if (result === "win") return t("win");
  if (result === "loss") return t("loss");
  return t("be");
}

function renderBadge(label, variant) {
  return `<span class="badge ${variant}">${escapeHtml(label)}</span>`;
}

function profitClass(value) {
  const stringValue = typeof value === "string" ? value : null;
  const numeric = stringValue ? Number.NaN : parseNumber(value);
  if (stringValue?.startsWith("-") || numeric < 0) return "profit-negative";
  if (stringValue?.startsWith("$") || stringValue?.startsWith("US$") || stringValue?.startsWith("€")) return "profit-positive";
  if (numeric > 0) return "profit-positive";
  return "profit-neutral";
}

function t(key) {
  return translations[state.language][key] || key;
}

function groupBy(items, getKey) {
  return items.reduce((accumulator, item) => {
    const key = getKey(item);
    accumulator[key] ||= [];
    accumulator[key].push(item);
    return accumulator;
  }, {});
}

function groupBySplit(items, getValue) {
  return items.reduce((accumulator, item) => {
    const raw = getValue(item);
    const keys = String(raw)
      .split(/[;,]/)
      .map((value) => value.trim())
      .filter(Boolean);
    const values = keys.length ? keys : ["-"];

    values.forEach((key) => {
      accumulator[key] ||= [];
      accumulator[key].push(item);
    });

    return accumulator;
  }, {});
}

function getWeekInputValue(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((target - yearStart) / 86400000 + 1) / 7);
  return `${target.getUTCFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}

function getMonthInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
