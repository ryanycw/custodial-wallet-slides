import type { ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#111111', accent: '#fe5100' },
  fonts: {
    display: '-apple-system, "PingFang TC", "Noto Sans TC", system-ui, sans-serif',
    body: '-apple-system, "PingFang TC", "Noto Sans TC", system-ui, sans-serif',
  },
  typeScale: { hero: 150, body: 36 },
  radius: 28,
};

// Funner-inspired candy palette (extra colors beyond the DesignSystem shape).
const yellow = '#ffcd01';
const blue = '#4190de';
const purple = '#7c55c6';
const pink = '#eb6fbd';
const green = '#00b140';
const ink = '#111111';
const muted = '#6b6b6b';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

// House transition: RISE — one DNA across the deck.
export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

// Section breaks breathe: exit fully, hold, then enter.
const breath: SlideTransition = {
  duration: 460,
  exit: {
    duration: 180,
    easing: EASE_IN,
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
  },
  enter: {
    duration: 240,
    delay: 300,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

const Pill = ({ bg, color = '#ffffff', children }: { bg: string; color?: string; children: ReactNode }) => (
  <span
    style={{
      display: 'inline-block',
      background: bg,
      color,
      borderRadius: 999,
      padding: '12px 32px',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

const Heading = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 76,
      fontWeight: 900,
      margin: 0,
      lineHeight: 1.15,
      letterSpacing: -1,
    }}
  >
    {children}
  </h2>
);

const Bullet = ({ dot, children }: { dot: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: 999,
        background: dot,
        flexShrink: 0,
        marginTop: 16,
      }}
    />
    <span style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.5 }}>{children}</span>
  </div>
);

const B = ({ c, children }: { c: string; children: ReactNode }) => (
  <strong style={{ color: c, fontWeight: 800 }}>{children}</strong>
);

/* ------------------------------------------------ 01 · Cover */

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: yellow,
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 6, marginBottom: 40 }}>
      @RYANYCW · 2026
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.05,
        letterSpacing: -3,
      }}
    >
      2026 錢包大盤點
    </h1>
    <p style={{ fontSize: 46, fontWeight: 700, margin: '36px 0 64px', color: ink }}>
      Wallet Landscape in 2026 — 從一把私鑰，到沒有完整私鑰
    </p>
    <div style={{ display: 'flex', gap: 24 }}>
      <Pill bg={blue}>錢包進化史</Pill>
      <Pill bg={purple}>MULTISIG vs. MPC</Pill>
      <Pill bg={green}>挑選指南</Pill>
    </div>
  </div>
);

Cover.transition = {
  duration: 280,
  exit: {
    duration: 160,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-6px)' },
    ],
  },
  enter: {
    duration: 280,
    delay: 100,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
    ],
  },
};

/* ------------------------------------------------ 02 · Agenda */

const AgendaCard = ({ bg, num, title, sub }: { bg: string; num: string; title: string; sub: string }) => (
  <div
    style={{
      flex: 1,
      background: bg,
      color: '#ffffff',
      borderRadius: 'var(--osd-radius)',
      padding: '56px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}
  >
    <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1, opacity: 0.85 }}>{num}</div>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 46, fontWeight: 900, lineHeight: 1.25 }}>
      {title}
    </div>
    <div style={{ fontSize: 28, lineHeight: 1.5, opacity: 0.92 }}>{sub}</div>
  </div>
);

const Agenda: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>今天聊三件事</Heading>
    <div style={{ display: 'flex', gap: 40, marginTop: 72, height: 560 }}>
      <AgendaCard bg={blue} num="01" title="錢包進化史の盤點" sub="從 CLI 到 Agentic：這 15 年錢包都經歷了什麼" />
      <AgendaCard bg={purple} num="02" title="Multisig vs. MPC 白話文" sub="兩種「不要把雞蛋放同一把鑰匙」的哲學" />
      <AgendaCard bg={green} num="03" title="個人 & 團隊錢包挑選指南" sub="用 UX × Feature × Safety 找到你的那一款" />
    </div>
  </div>
);

/* ------------------------------------------------ Section dividers */

const Divider = ({ bg, num, title, sub }: { bg: string; num: string; title: string; sub: string }) => (
  <div
    style={{
      ...fill,
      background: bg,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 8, marginBottom: 40, opacity: 0.9 }}>
      PART {num}
    </div>
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: -2,
      }}
    >
      {title}
    </div>
    <div style={{ fontSize: 40, fontWeight: 600, marginTop: 44, opacity: 0.92 }}>{sub}</div>
  </div>
);

const Divider1: Page = () => (
  <Divider bg={blue} num="01" title="錢包進化史の盤點" sub="15 年，五個世代，一路從指令列走到 AI 代理" />
);
Divider1.transition = breath;

/* ------------------------------------------------ 04 · Early era */

const EarlyEra: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      早期時代：<span style={{ color: blue }}>從 CLI 到 Mist</span>
    </Heading>
    <div style={{ marginTop: 64 }}>
      <Steps>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <Bullet dot={blue}>
            <B c={blue}>CLI 工具</B>：工程師限定，指令列直接簽名、廣播交易
          </Bullet>
          <Bullet dot={blue}>
            <B c={blue}>Mist / Ethereum Wallet</B>：官方桌面錢包，最終停止維護
          </Bullet>
          <Bullet dot={blue}>
            <B c={blue}>網頁工具</B>：MyEtherWallet 世代，私鑰在瀏覽器裡貼來貼去
          </Bullet>
        </div>
        <Step>
          <div
            style={{
              marginTop: 72,
              background: yellow,
              borderRadius: 'var(--osd-radius)',
              padding: '40px 56px',
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.4,
            }}
          >
            跟不上多鏈、DeFi、NFT 的爆發 → 集體退場 👋
          </div>
        </Step>
      </Steps>
    </div>
  </div>
);

/* ------------------------------------------------ 05 · Everyday wallets */

const CatCard = ({ bg, title, names }: { bg: string; title: string; names: string }) => (
  <div
    style={{
      background: bg,
      color: '#ffffff',
      borderRadius: 'var(--osd-radius)',
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
    }}
  >
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 42, fontWeight: 900 }}>{title}</div>
    <div style={{ fontSize: 30, lineHeight: 1.5, opacity: 0.95 }}>{names}</div>
  </div>
);

const EverydayWallets: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      百花齊放：<span style={{ color: blue }}>日常錢包四大流派</span>
    </Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 64,
      }}
    >
      <CatCard bg={blue} title="🧩 瀏覽器擴充" names="MetaMask · Rabby · Phantom · Rainbow · Trust" />
      <CatCard bg={purple} title="🧊 硬體冷錢包" names="Ledger · Trezor · OneKey · Keystone · imKey" />
      <CatCard bg={pink} title="📱 行動優先新勢力" names="Fluidkey · Peanut · Payy" />
      <CatCard bg={green} title="🏦 交易所錢包" names="Coinbase · Binance · OKX · Bybit · Bitget" />
    </div>
  </div>
);

/* ------------------------------------------------ 06 · AA & Agentic */

const NewSpecies: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      新物種：<span style={{ color: pink }}>AA 與 Agentic 錢包</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 60 }}>
      <div
        style={{
          flex: 1,
          background: blue,
          color: '#ffffff',
          borderRadius: 'var(--osd-radius)',
          padding: '44px 48px',
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 24 }}>帳戶抽象 AA</div>
        <div style={{ fontSize: 30, lineHeight: 1.55 }}>
          EIP-4337 / 3074 / 7702：免助記詞、gas 代付、social recovery
          <br />
          <span style={{ opacity: 0.85 }}>玩家：Privy · Dynamic · ZeroDev</span>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: pink,
          color: '#ffffff',
          borderRadius: 'var(--osd-radius)',
          padding: '44px 48px',
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 24 }}>Agentic 錢包</div>
        <div style={{ fontSize: 30, lineHeight: 1.55 }}>
          讓 AI agent 自己持有錢包、自動簽名與付款
          <br />
          <span style={{ opacity: 0.85 }}>玩家：Circle · Coinbase · Cloudflare · MetaMask</span>
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 40,
        background: '#f4f1ea',
        borderRadius: 'var(--osd-radius)',
        padding: '32px 48px',
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      而多簽老大哥 <B c={purple}>Safe</B>（前 Gnosis Safe）依然是個人與機構的金庫標配 →
      下一章詳談
    </div>
  </div>
);

/* ------------------------------------------------ 07 · Custody timeline */

const TimeNode = ({ bg, year, name, desc }: { bg: string; year: string; name: string; desc: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
    <span
      style={{
        background: bg,
        color: '#ffffff',
        borderRadius: 999,
        padding: '10px 28px',
        fontSize: 30,
        fontWeight: 900,
        minWidth: 170,
        textAlign: 'center',
        flexShrink: 0,
      }}
    >
      {year}
    </span>
    <span style={{ fontSize: 36, fontWeight: 800, flexShrink: 0 }}>{name}</span>
    <span style={{ fontSize: 30, color: muted }}>{desc}</span>
  </div>
);

const CustodyTimeline: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      支線任務：<span style={{ color: blue }}>機構託管進化史</span>
    </Heading>
    <div style={{ marginTop: 64 }}>
      <Steps>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={ink} year="2010" name="Mt. Gox" desc="交易所託管元年（也是慘案元年）" />
          </div>
        </Step>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={blue} year="2013" name="BitGo" desc="機構級 Multisig 2-of-3 開山祖師" />
          </div>
        </Step>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={purple} year="2018" name="Coinbase Custody" desc="合規機構託管正式上線" />
          </div>
        </Step>
        <Step>
          <div>
            <TimeNode bg={green} year="現在" name="Fireblocks 等" desc="MPC 成為機構標配（Anchorage · Cobo · Fidelity）" />
          </div>
        </Step>
      </Steps>
    </div>
  </div>
);

/* ------------------------------------------------ Part 2 */

const Divider2: Page = () => (
  <Divider bg={purple} num="02" title="Multisig vs. MPC 白話文" sub="兩種「不要把雞蛋放同一把鑰匙」的哲學" />
);
Divider2.transition = breath;

/* ------------------------------------------------ 09 · Multisig plain */

const MultisigPlain: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Multisig：<span style={{ color: purple }}>多把鑰匙開一個保險箱</span>
    </Heading>
    <div
      style={{
        marginTop: 48,
        background: purple,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 40,
        fontWeight: 800,
        lineHeight: 1.4,
      }}
    >
      「保險箱配 N 把鑰匙，開箱要同時湊滿 M 把」
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={purple}>
        每把私鑰<B c={purple}>獨立簽名</B>，鏈上合約驗證門檻（2-of-3、3-of-5）
      </Bullet>
      <Bullet dot={purple}>
        代表：<B c={purple}>Safe</B>（EVM 標配）、<B c={purple}>BitGo 2-of-3</B>（機構鼻祖）
      </Bullet>
      <Bullet dot={purple}>
        鏈上<B c={purple}>看得一清二楚</B>：門檻、簽名者、每次改組（P2SH / P2WSH）
      </Bullet>
    </div>
  </div>
);

/* ------------------------------------------------ 10 · MPC plain */

const MpcPlain: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      MPC：<span style={{ color: pink }}>一把鑰匙磨成碎片</span>
    </Heading>
    <div
      style={{
        marginTop: 48,
        background: pink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 40,
        fontWeight: 800,
        lineHeight: 1.4,
      }}
    >
      「完整私鑰，從頭到尾都沒存在過」
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={pink}>
        私鑰以 <B c={pink}>key share 碎片</B>分散在多方裝置與雲端 TEE
      </Bullet>
      <Bullet dot={pink}>
        簽名是一場<B c={pink}>鏈下多方運算</B>：湊門檻，但不拼回私鑰
      </Bullet>
      <Bullet dot={pink}>
        鏈上看起來就是<B c={pink}>普通單簽交易</B>，門檻大小外人看不出
      </Bullet>
      <Bullet dot={pink}>
        代表：<B c={pink}>Fireblocks MPC-CMP</B>、<B c={pink}>Coinbase Custody</B>
      </Bullet>
    </div>
  </div>
);

/* ------------------------------------------------ 11 · Versus */

const VsRow = ({ dot, children }: { dot: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
    <span style={{ width: 16, height: 16, borderRadius: 999, background: dot, flexShrink: 0, marginTop: 14 }} />
    <span style={{ fontSize: 30, lineHeight: 1.45 }}>{children}</span>
  </div>
);

const Versus: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      正面對決：<span style={{ color: purple }}>Multisig</span> vs. <span style={{ color: pink }}>MPC</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <div
        style={{
          flex: 1,
          background: '#f4f1ea',
          borderRadius: 'var(--osd-radius)',
          padding: '40px 44px',
        }}
      >
        <Steps>
          <div style={{ fontSize: 38, fontWeight: 900, color: purple, marginBottom: 32 }}>Multisig 的痛點</div>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>每條鏈實作不同，跨鏈不通用</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>簽名流程死板，改組要上鏈交易</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>災難復原得提前規劃、鏈上執行</VsRow>
            </div>
          </Step>
          <Step>
            <div>
              <VsRow dot={purple}>門檻與簽名者全鏈上公開</VsRow>
            </div>
          </Step>
        </Steps>
      </div>
      <div
        style={{
          flex: 1,
          background: yellow,
          borderRadius: 'var(--osd-radius)',
          padding: '40px 44px',
        }}
      >
        <Steps>
          <div style={{ fontSize: 38, fontWeight: 900, color: ink, marginBottom: 32 }}>MPC 的回應</div>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>簽出來是標準單簽，鏈鏈通吃</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>碎片鏈下 refresh，地址不用換</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>簽名者輪替不動鏈上任何東西</VsRow>
            </div>
          </Step>
          <Step>
            <div>
              <VsRow dot={ink}>門檻隱形，保留操作隱私</VsRow>
            </div>
          </Step>
        </Steps>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------ 12 · MPC bonus */

const MpcBonus: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      MPC 加分題：<span style={{ color: pink }}>還是講白話</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={pink}>
        <B c={pink}>Key Refresh</B>：定期把碎片重新洗牌，地址、公鑰都不變
      </Bullet>
      <Bullet dot={pink}>
        攻擊者必須在<B c={pink}>同一輪 refresh 內</B>集滿碎片，難度暴增
      </Bullet>
      <Bullet dot={pink}>
        <B c={pink}>Offline Signing</B>：前置回合預先算好，正式簽名一趟搞定
      </Bullet>
    </div>
    <div
      style={{
        marginTop: 64,
        background: ink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 34,
        fontWeight: 700,
        lineHeight: 1.5,
      }}
    >
      ⚠️ 但注意：服務商若握有足夠碎片，<span style={{ color: yellow }}>本質上還是託管</span>（custodial）
    </div>
  </div>
);

/* ------------------------------------------------ Part 3 */

const Divider3: Page = () => (
  <Divider bg={green} num="03" title="個人 & 團隊錢包挑選指南" sub="UX × Feature × Safety，對號入座" />
);
Divider3.transition = breath;

/* ------------------------------------------------ 14 · Three dimensions */

const DimCard = ({ bg, title, desc }: { bg: string; title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: bg,
      color: '#ffffff',
      borderRadius: 'var(--osd-radius)',
      padding: '52px 44px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
    }}
  >
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 56, fontWeight: 900 }}>{title}</div>
    <div style={{ fontSize: 30, lineHeight: 1.55, opacity: 0.95 }}>{desc}</div>
  </div>
);

const Dimensions: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      挑錢包前，先問<span style={{ color: green }}>三個維度</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 72, height: 480 }}>
      <DimCard bg={blue} title="UX" desc="上手難度、簽名流程順不順、行動端體驗好不好" />
      <DimCard bg={pink} title="Feature" desc="多鏈支援、DeFi 串接、自動化與政策控制" />
      <DimCard bg={green} title="Safety" desc="金鑰管理、災難復原、供應商與單點風險" />
    </div>
  </div>
);

/* ------------------------------------------------ 15 · Personal guide */

const PersonalGuide: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      個人指南：<span style={{ color: green }}>看金額對號入座</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>日常小額</B> → 瀏覽器 / 行動錢包（Rabby、Rainbow、imToken）
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>中額儲蓄</B> → 硬體冷錢包（Ledger、Trezor、Keystone）
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>大額長期</B> → Safe 多簽或 MPC 服務，拒絕單點失誤歸零
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>加分題</B> → AA 錢包 social recovery，「弄丟助記詞」變可救
      </Bullet>
    </div>
  </div>
);

/* ------------------------------------------------ 16 · Team guide */

const TeamGuide: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      團隊指南：<span style={{ color: green }}>透明 or 靈活，選一邊</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>小團隊 / DAO</B> → Safe：鏈上透明、治理友善、生態最成熟
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>機構 / 公司</B> → MPC 託管（Fireblocks、BitGo、Cobo）＋政策引擎
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>合規三件套</B> → KYC / AML / Travel Rule，讓託管商幫你扛
      </Bullet>
    </div>
    <div
      style={{
        marginTop: 64,
        background: green,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 36,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      靈魂拷問：誰握有足夠的鑰匙（或碎片），誰就是真正的託管方 🔑
    </div>
  </div>
);

/* ------------------------------------------------ 17 · Closing */

const Takeaway = ({ bg, num, children }: { bg: string; num: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
    <span
      style={{
        background: bg,
        color: '#ffffff',
        borderRadius: 999,
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 34,
        fontWeight: 900,
        flexShrink: 0,
      }}
    >
      {num}
    </span>
    <span style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.45 }}>{children}</span>
  </div>
);

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      background: yellow,
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 900,
        margin: '0 0 72px',
        letterSpacing: -2,
      }}
    >
      帶走三件事 🎒
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
      <Takeaway bg={blue} num="1">
        錢包一直在進化：從一把私鑰，走向「沒有完整私鑰」
      </Takeaway>
      <Takeaway bg={purple} num="2">
        Multisig 鏈上透明、MPC 鏈下靈活 — 沒有絕對贏家
      </Takeaway>
      <Takeaway bg={green} num="3">
        挑錢包 = UX × Feature × Safety，看金額與團隊決定
      </Takeaway>
    </div>
    <div style={{ marginTop: 88, fontSize: 30, fontWeight: 700 }}>
      Thanks! — @ryanycw · 完整研究筆記：hackmd.io/@ryanycw
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: '2026 錢包大盤點',
  createdAt: '2026-08-17T20:15:24.239Z',
};

export default [
  Cover,
  Agenda,
  Divider1,
  EarlyEra,
  EverydayWallets,
  NewSpecies,
  CustodyTimeline,
  Divider2,
  MultisigPlain,
  MpcPlain,
  Versus,
  MpcBonus,
  Divider3,
  Dimensions,
  PersonalGuide,
  TeamGuide,
  Closing,
] satisfies Page[];
