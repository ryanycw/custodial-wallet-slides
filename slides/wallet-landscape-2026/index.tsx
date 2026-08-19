import type { ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { MorphElement, Step, Steps } from '@open-slide/core';
import imgInfiniteGarden from '@assets/Infinite Garden.png';
import imgL2Beat from '@assets/L2Beat.png';
import img53L2s from '@assets/53L2s.png';
import imgJacksonPollock from '@assets/JacksonPollock.png';
import imgEthereumIsDifferent from '@assets/Ethereum is different.png';
import imgCAStack from '@assets/CAStack.png';
import imgAbstractionProblems from '@assets/Abstraction Problems.png';
import imgFromAAToAgentic from '@assets/From AA to Agentic.png';
import imgWalletbeat from '@assets/Walletbeat.png';
import imgSelfCustody from '@assets/Self Custody.png';
import imgTelegram from '@assets/Telegram.jpeg';
import imgETHTaipeiGroup from '@assets/ETHTaipei_Group.png';
import imgFutremodePanel from '@assets/FUTUREMODE_Panel.png';
import imgFuturemodeWorkshop from '@assets/FUTUREMODE_Workshop.png';
import vidTLDR from '@assets/TLDR.mov';
import qrETHTaipei from '@assets/QR_ETHTaipei.png';
import qrTLDR from '@assets/QR_TLDR.png';
import qrFUTUREMODE from '@assets/QR_FUTUREMODE.png';

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
  position: 'relative',
} as const;

const PageRefs = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      bottom: 36,
      fontSize: 20,
      fontWeight: 600,
      color: muted,
      opacity: 0.85,
    }}
  >
    參考：{children}
  </div>
);

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

/* ------------------------------------------------ 02 · Photo call */

const PhotoCall: Page = () => (
  <div
    style={{
      ...fill,
      background: yellow,
      color: 'var(--osd-text)',
      display: 'flex',
      alignItems: 'center',
      gap: 80,
      padding: '100px 140px',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 110,
          fontWeight: 900,
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: -2,
        }}
      >
        拍照換 Burner！
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 36, lineHeight: 1.5, fontWeight: 600 }}>
        <div>🙈 恥ずかしい 請大家幫個忙</div>
        <div>📷 隨手拍拍照（不一定要拍我）拍活動也可以</div>
        <div>
          🎁 傳給我<strong style={{ color: pink }}>換一張 Burner</strong>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
      <img
        src={imgTelegram}
        style={{ width: 560, height: 680, objectFit: 'contain', borderRadius: 24, background: '#ffffff' }}
      />
    </div>
  </div>
);

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
    <PageRefs>ethereum.org · cryptomus.com</PageRefs>
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
      <CatCard bg={purple} title="🧊 硬體冷錢包" names="Ledger · Trezor · OneKey · Keystone · imKey · CoolWallet" />
      <CatCard bg={pink} title="📱 行動優先新勢力" names="Fluidkey · Peanut · Payy · Burner" />
      <CatCard bg={green} title="🏦 交易所錢包" names="Coinbase · Binance · OKX · Bybit · Bitget" />
    </div>
    <PageRefs>ethereum.org/wallets/find-wallet</PageRefs>
  </div>
);

/* ------------------------------------------------ Image-led pages (shared layout) */

const ImageSlide = ({
  title,
  lead,
  img,
  cap,
  chips,
}: {
  title: ReactNode;
  lead?: string;
  img: string;
  cap?: string;
  chips?: ReactNode;
}) => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '90px 100px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.2,
        letterSpacing: -1,
      }}
    >
      {title}
    </h2>
    {lead ? (
      <p style={{ fontSize: 32, fontWeight: 600, color: muted, margin: '24px 0 0' }}>{lead}</p>
    ) : null}
    {chips ? <div style={{ display: 'flex', gap: 20, marginTop: 28 }}>{chips}</div> : null}
    <div
      style={{
        flex: 1,
        minHeight: 0,
        marginTop: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={img}
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 16 }}
      />
    </div>
    {cap ? (
      <div style={{ marginTop: 20, fontSize: 22, fontWeight: 600, color: muted, textAlign: 'right' }}>
        {cap}
      </div>
    ) : null}
  </div>
);

/* ------------------------------------------------ Ecosystem era pages */

const InfiniteGarden: Page = () => (
  <ImageSlide
    title={
      <>
        EF 的新論述：<span style={{ color: green }}>Infinite Garden</span>
      </>
    }
    lead="隨著生態百花齊放，以太坊基金會開啟一個新敘事"
    img={imgInfiniteGarden}
    cap="來源：Ethereum Foundation"
  />
);

const L2Centric: Page = () => (
  <ImageSlide
    title={
      <>
        迎接 <span style={{ color: blue }}>L2-Centric</span> 時代
      </>
    }
    img={img53L2s}
    cap="來源：defillama.com/chains/ethereum"
    chips={
      <>
        <Pill bg={blue}>流動性破碎</Pill>
        <Pill bg={purple}>相容性問題</Pill>
        <Pill bg={pink}>UX 很差</Pill>
      </>
    }
  />
);

const AbstractionEra: Page = () => (
  <ImageSlide
    title={
      <>
        大 <span style={{ color: purple }}>Abstraction</span> 時代
      </>
    }
    lead="L2 大戰之後，大家開始重新思考既有的解法"
    img={imgJacksonPollock}
  />
);

const MassAdoption: Page = () => (
  <ImageSlide
    title={
      <>
        迎來 <span style={{ color: pink }}>Mass Adoption</span> 年代
      </>
    }
    lead="所有東西都要 Abstraction"
    img={imgEthereumIsDifferent}
    cap="來源：vitalik.eth.limo — Layer 2s as cultural extensions of Ethereum"
  />
);

const CAStack: Page = () => (
  <ImageSlide
    title="發展出各種技術和產品"
    lead="Chain Abstraction 的生態地圖"
    img={imgCAStack}
    cap="來源：therollup.co — Chain Abstraction Market Map"
  />
);

const ProblemRow = ({ dot, children }: { dot: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
    <span style={{ width: 18, height: 18, borderRadius: 999, background: dot, flexShrink: 0, marginTop: 13 }} />
    <span style={{ fontSize: 30, lineHeight: 1.45 }}>{children}</span>
  </div>
);

const AbstractionProblems: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '90px 100px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 900,
        margin: 0,
        lineHeight: 1.2,
        letterSpacing: -1,
      }}
    >
      開始收斂：<span style={{ color: purple }}>Abstraction 要解決什麼</span>
    </h2>
    <p style={{ fontSize: 32, fontWeight: 600, color: muted, margin: '24px 0 0' }}>
      接下來幾年，各家想解的問題漸漸對齊成四大塊
    </p>
    <div style={{ display: 'flex', gap: 56, marginTop: 36, flex: 1, minHeight: 0 }}>
      <div style={{ width: 720, display: 'flex', flexDirection: 'column', gap: 30, justifyContent: 'center' }}>
        <ProblemRow dot={blue}>
          <B c={blue}>Intents + Solvers</B>：使用者只表達意圖，「怎麼做」交給 solver
        </ProblemRow>
        <ProblemRow dot={pink}>
          <B c={pink}>Account Abstraction</B>：帳戶可編程，簽名與 gas 都能抽象
        </ProblemRow>
        <ProblemRow dot={green}>
          <B c={green}>Interoperability</B>：跨鏈互通，資產與訊息自由移動
        </ProblemRow>
        <ProblemRow dot={purple}>
          <B c={purple}>Alternative DA Networks</B>：更便宜的資料可用性層
        </ProblemRow>
        <ProblemRow dot={yellow}>
          四者的交集，就是 <B c={ink}>Chain Abstraction</B> 的完整拼圖
        </ProblemRow>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={imgAbstractionProblems}
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 16 }}
        />
      </div>
    </div>
    <div style={{ marginTop: 20, fontSize: 22, fontWeight: 600, color: muted, textAlign: 'right' }}>
      來源：@AustinKing
    </div>
  </div>
);

const L2BeatPage: Page = () => (
  <ImageSlide
    title={
      <>
        看不完的 L2？交給 <span style={{ color: blue }}>L2Beat</span>
      </>
    }
    img={imgL2Beat}
    cap="來源：l2beat.com"
  />
);

/* ------------------------------------------------ 06 · AA wallets */

const AAWallets: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      新物種 I：<span style={{ color: blue }}>帳戶抽象 AA</span>
    </Heading>
    <div
      style={{
        marginTop: 48,
        background: blue,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 40,
        fontWeight: 800,
        lineHeight: 1.4,
      }}
    >
      「帳戶不再是一把私鑰，而是一個可編程的合約」
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={blue}>
        <B c={blue}>EIP-4337 / 3074 / 7702</B>：把 EOA 一步步升級成智能帳戶
      </Bullet>
      <Bullet dot={blue}>
        免助記詞、<B c={blue}>gas 代付</B>、批次交易、passkey 登入
      </Bullet>
      <Bullet dot={blue}>
        <B c={blue}>Social recovery</B>：手機掉了找朋友救，不用抄 24 個單字
      </Bullet>
      <Bullet dot={blue}>
        曾經的玩家：<B c={blue}>Privy · Dynamic · ZeroDev</B>
      </Bullet>
    </div>
    <PageRefs>eips.ethereum.org（EIP-4337 · EIP-7702）· vocus.cc</PageRefs>
  </div>
);

/* ------------------------------------------------ 07 · Agentic wallets */

const AgenticWallets: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      新物種 II：<span style={{ color: pink }}>Agentic 錢包</span>
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
      「人類設規則，AI 自己花錢」
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 48 }}>
      <Bullet dot={pink}>
        AI agent <B c={pink}>自己持有錢包</B>：自動簽名、付款、訂閱服務
      </Bullet>
      <Bullet dot={pink}>
        搭配<B c={pink}>政策引擎</B>：限額、白名單、例外才找人類批准
      </Bullet>
      <Bullet dot={pink}>
        機器對機器的付款協議（如 <B c={pink}>x402</B>）開始成形
      </Bullet>
      <Bullet dot={pink}>
        玩家：<B c={pink}>Circle · Coinbase · Cloudflare · MetaMask</B>
      </Bullet>
    </div>
    <PageRefs>narval.xyz · fireblocks.com · theblock.co</PageRefs>
  </div>
);

/* ------------------------------------------------ From AA to Agentic */

const AAToAgentic: Page = () => (
  <ImageSlide
    title={
      <>
        AA 也從 <span style={{ color: blue }}>Account</span> 變成{' '}
        <span style={{ color: pink }}>Agentic</span>
      </>
    }
    img={imgFromAAToAgentic}
    cap="來源：@elytro_eth"
  />
);

/* ------------------------------------------------ 08–09 · Evolution flow (branching timeline, morph-linked) */

const morphTransition: SlideTransition = {
  duration: 280,
  exit: { duration: 224, easing: EASE_IN, keyframes: [{ opacity: 1 }, { opacity: 0 }] },
  enter: { duration: 308, delay: 112, easing: EASE_OUT, keyframes: [{ opacity: 0 }, { opacity: 1 }] },
  morph: { duration: 868, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};

const flowStage = {
  ...fill,
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative',
  overflow: 'hidden',
} as const;

const FlowHeading = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      position: 'absolute',
      left: 100,
      top: 84,
      margin: 0,
      fontFamily: 'var(--osd-font-display)',
      fontSize: 60,
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: -1,
    }}
  >
    {children}
  </h2>
);

const FlowNode = ({
  left,
  top,
  w,
  bg,
  fg = '#ffffff',
  emoji,
  title,
  years,
  desc,
}: {
  left: number;
  top: number;
  w: number;
  bg: string;
  fg?: string;
  emoji: string;
  title: string;
  years?: string;
  desc: string;
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: w,
      background: bg,
      color: fg,
      borderRadius: 'var(--osd-radius)',
      padding: '32px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <div style={{ fontSize: 44, lineHeight: 1 }}>{emoji}</div>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
      {title}
    </div>
    {years ? (
      <div
        style={{
          alignSelf: 'flex-start',
          fontSize: 20,
          fontWeight: 800,
          background: fg === '#ffffff' ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.10)',
          borderRadius: 999,
          padding: '4px 16px',
        }}
      >
        {years}
      </div>
    ) : null}
    <div style={{ fontSize: 24, lineHeight: 1.45, opacity: 0.95 }}>{desc}</div>
  </div>
);

const FlowLink = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => {
  const pad = 24;
  const left = Math.min(x1, x2) - pad;
  const top = Math.min(y1, y2) - pad;
  const wdt = Math.abs(x2 - x1) + pad * 2;
  const hgt = Math.abs(y2 - y1) + pad * 2;
  const ax = x1 - left;
  const ay = y1 - top;
  const bx = x2 - left;
  const by = y2 - top;
  const mx = ax + (bx - ax) / 2;
  return (
    <svg style={{ position: 'absolute', left, top, pointerEvents: 'none' }} width={wdt} height={hgt}>
      <path
        d={`M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx - 12} ${by}`}
        stroke="#111111"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
      />
      <polygon points={`${bx - 20},${by - 12} ${bx},${by} ${bx - 20},${by + 12}`} fill="#111111" />
    </svg>
  );
};

const FlowLabel = ({ left, top, children }: { left: number; top: number; children: ReactNode }) => (
  <div style={{ position: 'absolute', left, top, fontSize: 24, fontWeight: 700, color: muted }}>
    {children}
  </div>
);

// AA node appears on both flow pages with the same morph id — it glides across the cut.
const AANode = ({ left, top }: { left: number; top: number }) => (
  <MorphElement id="aa-node">
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: 480,
        background: pink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '32px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ fontSize: 44, lineHeight: 1 }}>🪄</div>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
        Account Abstraction
      </div>
      <div
        style={{
          alignSelf: 'flex-start',
          fontSize: 20,
          fontWeight: 800,
          background: 'rgba(255,255,255,0.22)',
          borderRadius: 999,
          padding: '4px 16px',
        }}
      >
        2023–
      </div>
      <div style={{ fontSize: 24, lineHeight: 1.45, opacity: 0.95 }}>
        為了 UX 而生：免助記詞、gas 代付
      </div>
    </div>
  </MorphElement>
);

// Extension Base node appears on flow pages A and Mid with the same morph id.
const ExtensionNode = ({ left, top, w }: { left: number; top: number; w: number }) => (
  <MorphElement id="extension-node">
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: w,
        background: blue,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '32px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ fontSize: 44, lineHeight: 1 }}>🧩</div>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
        Extension Base
      </div>
      <div
        style={{
          alignSelf: 'flex-start',
          fontSize: 20,
          fontWeight: 800,
          background: 'rgba(255,255,255,0.22)',
          borderRadius: 999,
          padding: '4px 16px',
        }}
      >
        2016–
      </div>
      <div style={{ fontSize: 24, lineHeight: 1.45, opacity: 0.95 }}>MetaMask 世代，日常操作主力</div>
    </div>
  </MorphElement>
);

const EvolutionFlowA: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      演化上半場：<span style={{ color: blue }}>私鑰的分岔路</span>
    </FlowHeading>
    <Steps>
      <FlowNode
        left={100}
        top={420}
        w={400}
        bg={ink}
        emoji="⌨️"
        title="CLI / Mist"
        years="2009–2016"
        desc="指令列與桌面錢包，工程師限定"
      />
      <Step>
        <div>
          <FlowLink x1={500} y1={570} x2={890} y2={382} />
          <FlowLink x1={500} y1={570} x2={890} y2={772} />
          <ExtensionNode left={900} top={250} w={520} />
          <FlowNode
            left={900}
            top={640}
            w={520}
            bg={purple}
            emoji="🧊"
            title="Cold Wallet"
            years="2014–"
            desc="Ledger · Trezor，大額冷保管"
          />
          <FlowLabel left={100} top={745}>
            ⚡ 難用，一般人進不來
          </FlowLabel>
          <FlowLabel left={900} top={928}>
            🥶 安全，但日常用不動（此路到此為止）
          </FlowLabel>
          <FlowLabel left={900} top={540}>
            🌱 生態在這條路上百花齊放 →
          </FlowLabel>
        </div>
      </Step>
    </Steps>
    <PageRefs>ethereum.org/wallets</PageRefs>
  </div>
);
EvolutionFlowA.transition = morphTransition;

const EvolutionFlowMid: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      演化中場：<span style={{ color: purple }}>抽象化的浪潮</span>
    </FlowHeading>
    <Steps>
      <ExtensionNode left={100} top={400} w={420} />
      <Step>
        <div>
          <FlowLink x1={520} y1={532} x2={710} y2={545} />
          <FlowNode
            left={720}
            top={400}
            w={480}
            bg={yellow}
            fg={ink}
            emoji="🌐"
            title="L2-Centric 時代"
            years="2020–"
            desc="Infinite Garden 開花，53 條 L2 齊發"
          />
          <FlowLabel left={100} top={690}>
            ⚡ 生態百花齊放，鏈越開越多
          </FlowLabel>
          <FlowLabel left={720} top={740}>
            ⚡ 流動性破碎、相容性差、UX 爛
          </FlowLabel>
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1200} y1={545} x2={1310} y2={532} />
          <AANode left={1320} top={400} />
          <FlowLabel left={1320} top={690}>
            💡 一切都要 Abstraction
          </FlowLabel>
        </div>
      </Step>
    </Steps>
    <PageRefs>vocus.cc · vitalik.eth.limo · therollup.co</PageRefs>
  </div>
);
EvolutionFlowMid.transition = morphTransition;

const EvolutionFlowB: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      演化下半場：<span style={{ color: pink }}>AA 開枝散葉</span>
    </FlowHeading>
    <Steps>
      <AANode left={100} top={400} />
      <Step>
        <div>
          <FlowLink x1={580} y1={532} x2={890} y2={272} />
          <FlowNode
            left={900}
            top={140}
            w={900}
            bg={blue}
            emoji="📱"
            title="大 PayFi 時代"
            years="2024–"
            desc="Mobile 端起飛：穩定幣付款日常化（Fluidkey · Peanut · Payy）"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={580} y1={532} x2={890} y2={572} />
          <FlowNode
            left={900}
            top={440}
            w={900}
            bg={purple}
            emoji="🏦"
            title="交易所全押 AA"
            years="2024–"
            desc="Coinbase · Binance 用智能帳戶搶佔 onchain 版圖"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={580} y1={532} x2={890} y2={872} />
          <FlowNode
            left={900}
            top={740}
            w={900}
            bg={green}
            emoji="🤖"
            title="大 AI 時代：Agentic"
            years="2025–"
            desc="AI 代理自己持錢包、自動付款（Coinbase Agentic Wallets · x402）"
          />
        </div>
      </Step>
    </Steps>
    <PageRefs>theblock.co · coinbase.com · token.im</PageRefs>
  </div>
);
EvolutionFlowB.transition = morphTransition;

/* ------------------------------------------------ Walletbeat & self-custody */

const WalletbeatPage: Page = () => (
  <ImageSlide
    title={
      <>
        錢包界的 L2Beat：<span style={{ color: green }}>Walletbeat</span>
      </>
    }
    lead="把各家錢包一字排開，逐項檢視功能與去中心化程度"
    img={imgWalletbeat}
    cap="來源：@walletbeat · beta.walletbeat.eth.limo"
  />
);

const SelfCustodyFading: Page = () => (
  <ImageSlide
    title={
      <>
        <span style={{ color: purple }}>Self Custody</span> 漸漸式微？
      </>
    }
    lead="UX 與 Mass Adoption 的浪潮下，自我保管越來越小眾"
    img={imgSelfCustody}
  />
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
            <TimeNode bg={blue} year="2013" name="BitGo" desc="Multisig 2-of-3 開山，後來也擁抱 MPC-TSS" />
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
    <div
      style={{
        marginTop: 56,
        background: '#f4f1ea',
        borderRadius: 'var(--osd-radius)',
        padding: '24px 44px',
        fontSize: 28,
        fontWeight: 600,
      }}
    >
      而多簽老大哥 <B c={purple}>Safe</B>（前 Gnosis Safe）依然是個人與機構的金庫標配 → 下一章詳談
    </div>
    <PageRefs>bitgo.com · fireblocks.com</PageRefs>
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
        代表：<B c={purple}>Safe</B>（EVM 標配）、<B c={purple}>BitGo 2-of-3</B>（機構鼻祖，也有 MPC 版）
      </Bullet>
      <Bullet dot={purple}>
        鏈上<B c={purple}>看得一清二楚</B>：門檻、簽名者、每次改組（P2SH / P2WSH）
      </Bullet>
    </div>
    <PageRefs>safe.global · spark.money</PageRefs>
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
        代表：<B c={pink}>Fireblocks MPC-CMP</B>、<B c={pink}>BitGo MPC-TSS</B>、Coinbase Custody
      </Bullet>
    </div>
    <PageRefs>fireblocks.com（What is MPC）</PageRefs>
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
    <PageRefs>fireblocks.com · spark.money</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown · overview */

const ShowdownOverview: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Multisig vs. MPC <span style={{ color: purple }}>大評比：四個維度</span>
    </Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 64,
      }}
    >
      <CatCard bg={purple} title="🔑 Key Management" names="協議是誰發明的、碎片由誰保管" />
      <CatCard bg={blue} title="🧰 Feature & UX" names="政策引擎、流動性串接、日常好用度" />
      <CatCard bg={pink} title="🛡️ Security" names="TEE vs. HSM：碎片放哪裡才安心" />
      <CatCard bg={green} title="📋 Compliance" names="KYC / AML / Travel Rule 扛得動嗎" />
    </div>
  </div>
);

/* ------------------------------------------------ Showdown ① · Key management */

const KeyManagement: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      大評比 ①：<span style={{ color: purple }}>Key Management</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={purple}>
        <B c={purple}>BitGo × Silence Labs</B>：採 DKLs 協議，走 MPC-TSS 路線
      </Bullet>
      <Bullet dot={purple}>
        執筆人 Jack Doerner、Yashvanth Kondi — <B c={purple}>Brown / Northeastern</B> 學派
      </Bullet>
      <Bullet dot={purple}>
        <B c={purple}>Fireblocks × Ran Canetti</B>：CMP 協議 — <B c={purple}>Boston University</B> 學派
      </Bullet>
    </div>
    <div
      style={{
        marginTop: 64,
        background: yellow,
        borderRadius: 'var(--osd-radius)',
        padding: '36px 52px',
        fontSize: 36,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      檯面上是廠商大戰，檯面下是 Brown vs. BU 的學術較勁 XD
    </div>
    <div style={{ marginTop: 24, fontSize: 24, fontWeight: 600, color: muted }}>
      ※ DKLs = Doerner · Kondi · Lee · shelat｜CMP = Canetti · Makriyannis · Peled — 都是作者姓氏縮寫
    </div>
    <PageRefs>github.com/silence-laboratories · eprint.iacr.org/2020/492</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ①+ · CMP vs TSS */

const ProtoCard = ({ bg, color = '#111111', title, rows }: { bg: string; color?: string; title: string; rows: ReactNode }) => (
  <div
    style={{
      flex: 1,
      background: bg,
      color,
      borderRadius: 'var(--osd-radius)',
      padding: '40px 44px',
    }}
  >
    <div style={{ fontSize: 38, fontWeight: 900, marginBottom: 32 }}>{title}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>{rows}</div>
  </div>
);

const CmpVsTss: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      加映場：<span style={{ color: pink }}>MPC-CMP</span> vs. <span style={{ color: purple }}>MPC-TSS</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="MPC-CMP（Fireblocks）"
        rows={
          <>
            <VsRow dot={pink}>Paillier 同態加密算跨項相乘</VsRow>
            <VsRow dot={pink}>全程附 ZK proof：防超界作弊</VsRow>
            <VsRow dot={pink}>線上 1 round 出簽（離線預算 3 rounds）</VsRow>
            <VsRow dot={pink}>Proactive refresh：碎片定期洗牌</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="MPC-TSS / DKLs（BitGo）"
        rows={
          <>
            <VsRow dot={ink}>OT 不經意傳輸＋VOLE 驗算，免 Paillier</VsRow>
            <VsRow dot={ink}>EC 驗證點做 Statistical Consistency Checks</VsRow>
            <VsRow dot={ink}>2019 年 6 rounds → 2023 年 3 rounds</VsRow>
            <VsRow dot={ink}>與 Silence Labs 合作打造</VsRow>
          </>
        }
      />
    </div>
    <div
      style={{
        marginTop: 40,
        background: ink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '28px 52px',
        fontSize: 32,
        fontWeight: 700,
      }}
    >
      殊途同歸：鏈上都只是標準單簽 ✍️ — 而且兩邊都有開源實作
    </div>
    <PageRefs>eprint.iacr.org/2020/492 · github.com/silence-laboratories</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ①++ · Performance */

const PerfShowdown: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      加映場 II：<span style={{ color: pink }}>效能對決</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="MPC-CMP（Fireblocks）"
        rows={
          <>
            <VsRow dot={pink}>頻寬較低：每 party 約 15 KB</VsRow>
            <VsRow dot={pink}>運算較重：秒級（Paillier 大數運算）</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="MPC-TSS / DKLs（BitGo）"
        rows={
          <>
            <VsRow dot={ink}>頻寬較高：每 party 約 49 KB</VsRow>
            <VsRow dot={ink}>運算較輕：毫秒級（EC 運算為主）</VsRow>
          </>
        }
      />
    </div>
    <div
      style={{
        marginTop: 44,
        background: ink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '30px 52px',
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 1.5,
      }}
    >
      🐢 數據難以一比一比較，但瓶頸從來不是 MPC —
      合格託管卡在人工審核與法遵檢查
    </div>
    <PageRefs>eprint.iacr.org/2020/492 · github.com/silence-laboratories</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ② · Feature & UX */

const FeatureUx: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      大評比 ②：<span style={{ color: blue }}>Feature & UX — 結算網路對決</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="Fireblocks Network"
        rows={
          <>
            <VsRow dot={pink}>2,400+ 交易對手，月結算 $70B+</VsRow>
            <VsRow dot={pink}>穩定幣月流量 $200B+，150+ 條鏈</VsRow>
            <VsRow dot={pink}>CEX off-exchange 結算：Deribit · Bybit · OKX</VsRow>
            <VsRow dot={pink}>原生 DeFi、NFT、raw signing 全都有</VsRow>
            <VsRow dot={pink}>可編程 treasury：排程歸集、閾值再平衡</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="BitGo Go Network"
        rows={
          <>
            <VsRow dot={ink}>450 交易對手</VsRow>
            <VsRow dot={ink}>69+ 條鏈、20+ 交易所整合</VsRow>
            <VsRow dot={ink}>DeFi 靠第三方串接（非原生）</VsRow>
            <VsRow dot={ink}>無 raw signing、無 deposit routing</VsRow>
          </>
        }
      />
    </div>
    <div
      style={{
        marginTop: 40,
        background: blue,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '28px 52px',
        fontSize: 32,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      結算網路的規模差距，往往就是機構選邊站的主因 ⚖️
    </div>
    <PageRefs>fireblocks.com（compare treasury）· bitgo.com</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ③ · Security */

const SecurityShowdown: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      大評比 ③：<span style={{ color: pink }}>TEE</span> vs. <span style={{ color: purple }}>HSM</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg={blue}
        color="#ffffff"
        title="TEE：處理器裡的隔離小房間"
        rows={
          <>
            <VsRow dot="#ffffff">主晶片劃出的安全區（SGX、AWS Nitro）</VsRow>
            <VsRow dot="#ffffff">便宜、彈性、可軟體更新</VsRow>
            <VsRow dot="#ffffff">Fireblocks 的 MPC 碎片住這裡</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={purple}
        color="#ffffff"
        title="HSM：獨立的專職保險櫃"
        rows={
          <>
            <VsRow dot="#ffffff">專用防拆硬體，只管金鑰與加密</VsRow>
            <VsRow dot="#ffffff">防篡改、可自毀、簽名效能強</VsRow>
            <VsRow dot="#ffffff">BitGo 的金鑰材料住這裡</VsRow>
          </>
        }
      />
    </div>
    <div
      style={{
        marginTop: 44,
        background: ink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '30px 52px',
        fontSize: 34,
        fontWeight: 700,
      }}
    >
      成熟方案通常兩個都用：分層防禦 🛡️
    </div>
    <PageRefs>embitel.com（TEE vs HSM）</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ④ · Compliance */

const ReqRow = ({ bg, num, children }: { bg: string; num: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 26 }}>
    <span
      style={{
        background: bg,
        color: '#ffffff',
        borderRadius: 999,
        width: 52,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: 900,
        flexShrink: 0,
      }}
    >
      {num}
    </span>
    <span style={{ fontSize: 32, lineHeight: 1.45, paddingTop: 4 }}>{children}</span>
  </div>
);

const ComplianceShowdown: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      大評比 ④：<span style={{ color: green }}>Compliance 六大要件</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 52 }}>
      <ReqRow bg={blue} num="1">
        <B c={blue}>Strict Licensing Frameworks</B> — 各轄區牌照
      </ReqRow>
      <ReqRow bg={purple} num="2">
        <B c={purple}>KYC & Customer Due Diligence</B> — 你的客戶是誰
      </ReqRow>
      <ReqRow bg={pink} num="3">
        <B c={pink}>AML & Transaction Monitoring</B> — 可疑金流監控
      </ReqRow>
      <ReqRow bg={green} num="4">
        <B c={green}>The Travel Rule</B> — 轉帳雙方資訊必須隨行
      </ReqRow>
      <ReqRow bg={ink} num="5">
        <B c={ink}>Asset Segregation & Proof of Reserves</B> — 資產隔離與儲備證明
      </ReqRow>
      <ReqRow bg={blue} num="6">
        <B c={blue}>Tax Reporting Obligations</B> — 稅務申報
      </ReqRow>
    </div>
    <div
      style={{
        marginTop: 48,
        background: green,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '28px 52px',
        fontSize: 32,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      合規等級決定你能服務誰：散戶、企業，還是銀行 🏛️
    </div>
    <PageRefs>hackmd.io（Compliance Need）· bitgo.com（crypto regulation）</PageRefs>
  </div>
);

/* ------------------------------------------------ Compliance scorecard */

const ComplianceScorecard: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      合規成績單：<span style={{ color: pink }}>Fireblocks</span> vs. <span style={{ color: purple }}>BitGo</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="Fireblocks：技術認證路線"
        rows={
          <>
            <VsRow dot={pink}>SOC 1 & SOC 2 Type II 雙認證</VsRow>
            <VsRow dot={pink}>ISO 27001 / 27017 / 27018 / 22301</VsRow>
            <VsRow dot={pink}>CCSS Level 3</VsRow>
            <VsRow dot={pink}>整合 Chainalysis · Elliptic · Notabene</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="BitGo：牌照與保險路線"
        rows={
          <>
            <VsRow dot={ink}>CCSS Level 3、ISO 27001、SOC 2 Type II</VsRow>
            <VsRow dot={ink}>Qualified Custodian：多轄區牌照＋100% 冷存儲</VsRow>
            <VsRow dot={ink}>$250M 保險</VsRow>
            <VsRow dot={ink}>TRUST Network 成員</VsRow>
            <VsRow dot={ink}>Travel Rule 流程內建（下頁詳解）</VsRow>
          </>
        }
      />
    </div>
    <div
      style={{
        marginTop: 40,
        background: ink,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '28px 52px',
        fontSize: 32,
        fontWeight: 700,
      }}
    >
      一個走技術認證路線，一個走牌照與保險路線 📜
    </div>
    <PageRefs>bitgo.com（regulation · withdrawal safeguards）· fireblocks.com（compare treasury）</PageRefs>
  </div>
);

/* ------------------------------------------------ Travel Rule flow (BitGo) */

const TravelRuleFlow: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      BitGo 的 <span style={{ color: green }}>Travel Rule</span> 實戰
    </FlowHeading>
    <Steps>
      <FlowNode left={100} top={430} w={340} bg={ink} emoji="💸" title="出金一筆" desc="對象是誰？" />
      <Step>
        <div>
          <FlowLink x1={440} y1={537} x2={610} y2={327} />
          <FlowLink x1={440} y1={537} x2={610} y2={767} />
          <FlowNode left={620} top={220} w={400} bg={purple} emoji="🏛" title="對象：VASP" desc="交易所、託管商" />
          <FlowNode left={620} top={660} w={400} bg={blue} emoji="👤" title="對象：外部 EOA" desc="自家硬體 / 軟體錢包" />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1020} y1={327} x2={1230} y2={247} />
          <FlowLink x1={1020} y1={327} x2={1230} y2={527} />
          <FlowNode left={1240} top={140} w={560} bg={green} emoji="✅" title="已在 TRUST Network" desc="名單內 → 直接交易" />
          <FlowNode
            left={1240}
            top={420}
            w={560}
            bg={yellow}
            fg={ink}
            emoji="📝"
            title="不在名單"
            desc="補對方 VASP 資料進白名單 → 交易"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1020} y1={767} x2={1230} y2={807} />
          <FlowNode
            left={1240}
            top={700}
            w={560}
            bg={pink}
            emoji="🔬"
            title="Small Deposit Test"
            desc="24 小時內小額轉入，證明地址是你的"
          />
          <FlowLabel left={100} top={975}>
            📥 收到不明入金？管理員需補寄件人身分與居住地資料
          </FlowLabel>
        </div>
      </Step>
    </Steps>
    <PageRefs>bitgo.com/resource-center/travel-rule · notabene.id</PageRefs>
  </div>
);

/* ------------------------------------------------ Travel Rule ecosystem */

const TravelRuleEco: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Travel Rule 生態系：<span style={{ color: green }}>合規也要拉幫結派</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 60 }}>
      <TimeNode bg={blue} year="2,100+" name="Sumsub" desc="覆蓋最廣的合規服務商" />
      <TimeNode bg={purple} year="200+" name="TRUST Alliance" desc="Coinbase · Kraken · OKX · PayPal · Circle…" />
      <TimeNode bg={pink} year="200+" name="Chainalysis × Notabene" desc="鏈上鑑識 × Travel Rule 訊息層" />
      <TimeNode bg={green} year="150+" name="VerifyVASP" desc="亞洲為主：Bitfinex · Crypto.com · Bitget · WooX · BingX · FTX…" />
      <TimeNode bg={ink} year="116" name="Global Travel Rule" desc="Binance 主導，Sumsub × Fireblocks 助攻" />
    </div>
    <div style={{ marginTop: 48, fontSize: 26, fontWeight: 600, color: muted }}>
      ※ 不少交易所腳踏多條船：Crypto.com、Bitget、Amber 都同時掛在兩個聯盟
    </div>
    <PageRefs>verifyvasp.com · globaltravelrule.com · sumsub.com</PageRefs>
  </div>
);

/* ------------------------------------------------ Travel Rule open standard */

const TravelRuleStandard: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      下一步：Travel Rule 的<span style={{ color: purple }}>開放標準</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={purple}>
        各聯盟各說各話 → <B c={purple}>21 Analytics</B> 推動 <B c={purple}>TRP</B>（Travel Rule Protocol）
      </Bullet>
      <Bullet dot={purple}>
        <B c={purple}>IVMS 101</B>：inter-VASP 訊息統一格式，大家先講同一種語言
      </Bullet>
      <Bullet dot={purple}>
        站台的有：<B c={purple}>Sygna（VerifyVASP）· Notabene · TRUST Alliance</B>
      </Bullet>
    </div>
    <div
      style={{
        marginTop: 64,
        background: purple,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '32px 52px',
        fontSize: 34,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      從拉幫結派走向開放標準 — 合規的 TCP/IP 時刻 🌐
    </div>
    <PageRefs>21analytics.co（IVMS / TRP）</PageRefs>
  </div>
);

/* ------------------------------------------------ Safe in enterprise */

const SafeEnterprise: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      <span style={{ color: green }}>Safe</span> 也殺進企業戰場
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>Liminal</B>：基於 Safe 打造的企業級託管平台
      </Bullet>
      <Bullet dot={green}>
        AML 交給 <B c={green}>TRM Labs</B>，Travel Rule 交給 <B c={green}>Notabene</B>
      </Bullet>
      <Bullet dot={green}>
        多簽底座＋合規外掛 = DAO 之外的新戰場
      </Bullet>
    </div>
    <div
      style={{
        marginTop: 64,
        background: green,
        color: '#ffffff',
        borderRadius: 'var(--osd-radius)',
        padding: '32px 52px',
        fontSize: 34,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      開源多簽長出機構級合規 — Safe 的第二曲線 📈
    </div>
    <PageRefs>liminalcustody.com · trmlabs.com · notabene.id</PageRefs>
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
    <div style={{ marginTop: 24, fontSize: 24, fontWeight: 600, color: muted }}>
      ※ 本章不少內容出自 Fireblocks 官方資料，立場與數據請自行斟酌
    </div>
    <PageRefs>fireblocks.com（7 Reasons Why MPC）</PageRefs>
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
    <PageRefs>ethereum.org/wallets/find-wallet</PageRefs>
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
    <PageRefs>safe.global · fireblocks.com</PageRefs>
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

/* ------------------------------------------------ Thanks */

const Thanks: Page = () => (
  <div
    style={{
      ...fill,
      background: pink,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 160px',
    }}
  >
    <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 8, marginBottom: 44, opacity: 0.9 }}>
      SPECIAL THANKS
    </div>
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 130,
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: -2,
      }}
    >
      特別感謝 💐
    </div>
    <div style={{ fontSize: 52, fontWeight: 800, marginTop: 72 }}>Nic · Mason · PJ</div>
    <div style={{ fontSize: 36, fontWeight: 600, marginTop: 36, opacity: 0.95 }}>
      還有跟我一起 cowork 的遠距工作閒人們
    </div>
  </div>
);

/* ------------------------------------------------ Promo pages */

const PromoEvents: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '90px 120px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Heading>
      場外宣傳 <span style={{ color: pink }}>📣</span>
    </Heading>
    <div style={{ display: 'flex', gap: 48, marginTop: 48, flex: 1, minHeight: 0 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <img
          src={imgETHTaipeiGroup}
          style={{ width: '100%', height: 430, objectFit: 'cover', borderRadius: 20 }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img src={qrETHTaipei} style={{ width: 180, height: 180, borderRadius: 12 }} />
          <div>
            <div style={{ fontSize: 40, fontWeight: 900 }}>ETHTaipei</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>
              掃碼加入 · luma.com/8z5ys4rl
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <video
          src={vidTLDR}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: 430, objectFit: 'cover', borderRadius: 20 }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img src={qrTLDR} style={{ width: 180, height: 180, borderRadius: 12 }} />
          <div>
            <div style={{ fontSize: 40, fontWeight: 900 }}>TLDR</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>
              掃碼報名 · luma.com/5wmofnwc
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PromoFuturemode: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '90px 120px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Heading>
      FUTUREMODE <span style={{ color: purple }}>雙連發 ⚡</span>
    </Heading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 48, marginTop: 48 }}>
      <img
        src={imgFutremodePanel}
        style={{ flex: 1, minWidth: 0, height: 310, objectFit: 'contain', borderRadius: 20 }}
      />
      <div style={{ width: 420, flexShrink: 0 }}>
        <div style={{ fontSize: 40, fontWeight: 900 }}>ETH Panel</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>座談即將登場</div>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 48, marginTop: 40 }}>
      <img
        src={imgFuturemodeWorkshop}
        style={{ flex: 1, minWidth: 0, height: 310, objectFit: 'contain', borderRadius: 20 }}
      />
      <div style={{ width: 420, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 24 }}>
        <img src={qrFUTUREMODE} style={{ width: 170, height: 170, borderRadius: 12 }} />
        <div>
          <div style={{ fontSize: 40, fontWeight: 900 }}>ZK Workshop</div>
          <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>掃碼報名</div>
        </div>
      </div>
    </div>
  </div>
);

// Presenter-mode speaker notes — one entry per page, aligned with the export default order.
export const notes: (string | undefined)[] = [
  undefined, // 1 Cover
  undefined, // 2 拍照換 Burner
  undefined, // 3 Agenda
  undefined, // 4 Part 1 divider
  undefined, // 5 早期時代
  undefined, // 6 四大流派
  undefined, // 7 Infinite Garden
  undefined, // 8 Mass Adoption
  undefined, // 9 L2-Centric
  undefined, // 10 大 Abstraction 時代
  undefined, // 11 CA Stack
  undefined, // 12 Abstraction Problems
  undefined, // 13 L2Beat
  undefined, // 14 AA
  undefined, // 15 Agentic
  undefined, // 16 From AA to Agentic
  undefined, // 17 演化上半場
  undefined, // 18 演化中場
  undefined, // 19 演化下半場
  undefined, // 20 Walletbeat
  undefined, // 21 Self Custody
  undefined, // 22 機構託管進化史
  undefined, // 23 Part 2 divider
  'P2SH / P2WSH 白話：比特幣的「腳本式付款」格式 — 錢付給一段規則（腳本）的雜湊，開箱花錢時必須攤開完整規則（哪三把公鑰、湊滿幾個簽名）給全網驗證。P2SH 是 2012 年 BIP-16、地址 3 開頭；P2WSH 是 SegWit 升級版、bc1q 開頭，手續費更便宜，但門檻與簽名者照樣全公開。這正是下一頁 MPC「門檻隱形」的對比點。', // 24 Multisig 白話文
  undefined, // 25 MPC 白話文
  undefined, // 26 正面對決
  undefined, // 27 大評比總覽
  'DKLs = Doerner · Kondi · Lee · shelat（Brown / Northeastern 系）；CMP = Canetti · Makriyannis · Peled（Boston University）。兩個協議名都是作者姓氏縮寫 — 可以開玩笑說檯面上是 BitGo vs Fireblocks，檯面下是密碼學家的校際較勁。', // 28 Key Management
  'ZKP 怎麼講：簽名過程每個人傳的都是加密後的數字，怎麼確定沒人偷塞超大數字搞破壞（out-of-bound attack）？CMP 要求每則密文附上零知識證明 —「證明我的數字在合法範圍內，但不透露數字本身」，像交密封考卷附防偽章。術語：Paillier 在做 secret share 的同態運算；VOLE = Vector Oblivious Linear Evaluation，驗證 OT 乘法結果正確性的協議。Proactive refresh 在 CMP 中相對重要，因為 Paillier 的 key generation 運算成本較高。', // 29 CMP vs TSS
  '數據難以一比一比較（測試環境、參與方數都不同），但綜合來說 MPC 都不會是瓶頸 — qualified custodial 的真正 bottleneck 在其他 manual checks 和 regulatory checks。', // 30 效能對決
  undefined, // 31 MPC 加分題
  undefined, // 32 Feature & UX（結算網路對決）
  undefined, // 33 TEE vs HSM
  '銀行級還要再疊：MiCA、DORA、Basel、NIST CSF 2.0；託管商通常代勞制裁名單篩查、鏈上鑑識、行為基線分析。', // 34 Compliance 六大要件
  undefined, // 35 合規成績單
  'TRUST = Travel Rule Universal Solution Technology。Small Deposit Test 又叫 Satoshi Test：24 小時內從該地址轉入小額，證明外部硬體／軟體錢包歸你所有。不明入金時，錢包管理員會被要求補寄件人分類與居住地。', // 36 Travel Rule 流程
  undefined, // 37 Travel Rule 生態系
  undefined, // 38 Travel Rule 開放標準
  undefined, // 39 Safe in Enterprise
  undefined, // 40 Part 3 divider
  undefined, // 41 三維度
  undefined, // 42 個人指南
  undefined, // 43 團隊指南
  undefined, // 44 Closing
  undefined, // 45 Thanks
  undefined, // 46 場外宣傳（ETHTaipei · TLDR）
  undefined, // 47 FUTUREMODE 雙連發
];

export const meta: SlideMeta = {
  title: '2026 錢包大盤點',
  createdAt: '2026-08-17T20:15:24.239Z',
};

export default [
  Cover,
  PhotoCall,
  Agenda,
  Divider1,
  EarlyEra,
  EverydayWallets,
  InfiniteGarden,
  MassAdoption,
  L2Centric,
  AbstractionEra,
  CAStack,
  AbstractionProblems,
  L2BeatPage,
  AAWallets,
  AgenticWallets,
  AAToAgentic,
  EvolutionFlowA,
  EvolutionFlowMid,
  EvolutionFlowB,
  WalletbeatPage,
  SelfCustodyFading,
  CustodyTimeline,
  Divider2,
  MultisigPlain,
  MpcPlain,
  Versus,
  ShowdownOverview,
  KeyManagement,
  CmpVsTss,
  PerfShowdown,
  MpcBonus,
  FeatureUx,
  SecurityShowdown,
  ComplianceShowdown,
  ComplianceScorecard,
  TravelRuleFlow,
  TravelRuleEco,
  TravelRuleStandard,
  SafeEnterprise,
  Divider3,
  Dimensions,
  PersonalGuide,
  TeamGuide,
  Closing,
  Thanks,
  PromoEvents,
  PromoFuturemode,
] satisfies Page[];
