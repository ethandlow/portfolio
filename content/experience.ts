export interface ExperienceLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface Experience {
    id: string;
    /** Company / org name — displayed in "Client" column */
    org: string;
    /** Short description of the engagement — displayed in "Project" column */
    project: string;
    /** Category — displayed in "Type" column, e.g. "Founder", "Contract", "Full-time" */
    type: string;
    /** Platform / product built on or for — displayed in "Platform" column */
    platform?: string;
    /** Legacy fields */
    role?: string;
    dates?: string;
    location?: string;
    bullets?: string[];
    links?: ExperienceLink[];
    sortOrder: number;
}

export const experiences: Experience[] = [
    { id: "multi-stochastics", org: "Individual", project: "MultiStochastics", platform: "NinjaTrader 8 / Quantower / ATAS", type: "Indicator", sortOrder: 1 },
    { id: "average-daily-range", org: "Individual", project: "Average Daily Range", platform: "NinjaTrader 8 / Quantower / ATAS", type: "Indicator", sortOrder: 2 },
    { id: "smart-money-concepts", org: "Individual", project: "Smart Money Concepts", platform: "NinjaTrader 8 / ATAS", type: "Indicator", sortOrder: 3 },
    { id: "smart-money-trader", org: "Individual", project: "Smart Money Trader", platform: "NinjaTrader 8 / ATAS", type: "Algorithm", sortOrder: 4 },
    { id: "chart-trader", org: "Individual", project: "Chart Trader", platform: "ATAS", type: "Trading Tool", sortOrder: 5 },
    { id: "manual-backtester", org: "Individual", project: "Manual Backtester", platform: "ATAS", type: "Trading Tool", sortOrder: 6 },
    { id: "multi-timeframe-sd", org: "Individual", project: "Multi-Timeframe Supply & Demand", platform: "Quantower", type: "Indicator", sortOrder: 7 },
    { id: "order-panel", org: "Individual", project: "Order Panel", platform: "NinjaTrader 8", type: "Trading Tool", sortOrder: 8 },
    { id: "bookmap-strategies", org: "Individual", project: "Bookmap Strategies", platform: "NinjaTrader 8", type: "Strategy", sortOrder: 9 },
    { id: "ichimoku-auto-cloud", org: "Individual", project: "Ichimoku Auto Cloud Strategy", platform: "NinjaTrader 8 / ATAS", type: "Strategy", sortOrder: 10 },
    { id: "market-structure-indicator", org: "Individual", project: "Market Structure Indicator", platform: "TradingView", type: "Indicator", sortOrder: 11 },
    { id: "point-figure-suite", org: "Individual", project: "Point & Figure Suite Indicator", platform: "NinjaTrader 8 / Quantower", type: "Indicator", sortOrder: 12 },
    { id: "seihai-trader", org: "Individual", project: "Seihai Trader", platform: "NinjaTrader 8", type: "Trading Tool", sortOrder: 13 },
    { id: "account-info-overlay", org: "Individual", project: "Account Info Overlay", platform: "Quantower", type: "Indicator", sortOrder: 14 },
    { id: "spot-gamma", org: "Individual", project: "Spot Gamma", platform: "Quantower", type: "Indicator", sortOrder: 15 },
    { id: "economic-news-overlay", org: "Individual", project: "Economic News Overlay", platform: "NinjaTrader 8", type: "Indicator", sortOrder: 16 },
    { id: "delta-signals-indicator", org: "Individual", project: "Delta Signals Indicator", platform: "NinjaTrader 8", type: "Indicator", sortOrder: 17 },
    { id: "ichimoku-color", org: "Individual", project: "Ichimoku Color", platform: "NinjaTrader 8 / Quantower", type: "Indicator", sortOrder: 18 },
    { id: "ekitai", org: "Kaizen Traders", project: "Ekitai", platform: "NinjaTrader 8", type: "Indicator / License", sortOrder: 19 },
    { id: "seihai", org: "Kaizen Traders", project: "Seihai", platform: "NinjaTrader 8", type: "Indicator / License", sortOrder: 20 },
    { id: "line-break-trader", org: "Individual", project: "Line Break Trader", platform: "NinjaTrader 8", type: "Trading Tool", sortOrder: 21 },
    { id: "strikes-to-futures", org: "Individual", project: "StrikesToFutures", platform: "TradingView", type: "Conversion", sortOrder: 22 },
    { id: "superguppy-indicator", org: "Individual", project: "SuperGuppy Indicator", platform: "NinjaTrader 8 / Quantower / ATAS", type: "Indicator", sortOrder: 23 },
    { id: "candle-measure-indicator", org: "Individual", project: "Candle Measure Indicator", platform: "NinjaTrader 8", type: "Indicator", sortOrder: 24 },
    { id: "htf-power-of-three", org: "MonsterLab", project: "HTF Power of Three", platform: "Quantower", type: "Indicator", sortOrder: 25 },
    { id: "po3-first-fvg", org: "MonsterLab", project: "PO3 First FVG Indicator", platform: "TradingView", type: "Indicator", sortOrder: 26 },
    { id: "nxog", org: "MonsterLab", project: "NXOG", platform: "TradingView", type: "Indicator", sortOrder: 27 },
];
