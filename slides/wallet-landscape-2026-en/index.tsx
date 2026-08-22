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
import imgMPCFeature from '@assets/MPCFeature.png';
import qrETHTaipei from '@assets/QR_ETHTaipei.png';
import qrTLDR from '@assets/QR_TLDR.png';
import qrFUTUREMODE from '@assets/QR_FUTUREMODE.png';
import qrWalletMBTI from '@assets/QR_WalletMBTI.png';

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
    Refs: {children}
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
      Wallet Landscape 2026
    </h1>
    <p style={{ fontSize: 46, fontWeight: 700, margin: '36px 0 64px', color: ink }}>
      From a single private key — to no complete private key at all
    </p>
    <div style={{ display: 'flex', gap: 24 }}>
      <Pill bg={blue}>WALLET EVOLUTION</Pill>
      <Pill bg={purple}>MULTISIG vs. MPC</Pill>
      <Pill bg={green}>PICKING GUIDE</Pill>
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
        Snap a pic, get a Burner!
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 36, lineHeight: 1.5, fontWeight: 600 }}>
        <div>🙈 A slightly hazukashii favor to ask</div>
        <div>📷 Snap casually — the event counts, not just me</div>
        <div>
          🎁 Send them my way and <strong style={{ color: pink }}>swap for a Burner</strong>
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
    <Heading>Three things today</Heading>
    <div style={{ display: 'flex', gap: 40, marginTop: 72, height: 560 }}>
      <AgendaCard bg={blue} num="01" title="The Wallet Evolution Rundown" sub="From CLI to Agentic: 15 years of wallet history" />
      <AgendaCard bg={purple} num="02" title="Multisig vs. MPC, in Plain English" sub="Two philosophies of not putting all eggs on one key" />
      <AgendaCard bg={green} num="03" title="Wallet Picking Guide for You & Your Team" sub="Find your match with UX × Feature × Safety" />
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
  <Divider bg={blue} num="01" title="The Wallet Evolution Rundown" sub="15 years, five generations — from the command line to AI agents" />
);
Divider1.transition = breath;

/* ------------------------------------------------ 04 · Early era */

const EarlyEra: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      The early days: <span style={{ color: blue }}>from CLI to Mist</span>
    </Heading>
    <div style={{ marginTop: 64 }}>
      <Steps>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <Bullet dot={blue}>
            <B c={blue}>CLI tools</B>: engineers only — sign & broadcast from the terminal
          </Bullet>
          <Bullet dot={blue}>
            <B c={blue}>Mist / Ethereum Wallet</B>: the official desktop wallet, eventually sunset
          </Bullet>
          <Bullet dot={blue}>
            <B c={blue}>Web tools</B>: the MyEtherWallet era — private keys pasted into browsers
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
            Couldn't keep up with the multichain, DeFi, NFT boom → mass exit 👋
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
      Full bloom: <span style={{ color: blue }}>four schools of everyday wallets</span>
    </Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 64,
      }}
    >
      <CatCard bg={blue} title="🧩 Browser extensions" names="MetaMask · Rabby · Phantom · Ambire" />
      <CatCard bg={purple} title="🧊 Hardware cold wallets" names="Trezor · OneKey · Ledger · Keystone · imKey · CoolWallet" />
      <CatCard bg={pink} title="📱 Mobile-first upstarts" names="Fluidkey · Peanut · Payy · Burner" />
      <CatCard bg={green} title="🏦 Exchange wallets" names="Coinbase · Binance · OKX · Bybit · Bitget" />
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
        EF's new narrative: <span style={{ color: green }}>Infinite Garden</span>
      </>
    }
    lead="As the ecosystem blossomed, the Ethereum Foundation opened a new story"
    img={imgInfiniteGarden}
    cap="Source: Ethereum Foundation"
  />
);

const L2Centric: Page = () => (
  <ImageSlide
    title={
      <>
        Enter the <span style={{ color: blue }}>L2-Centric</span> era
      </>
    }
    img={img53L2s}
    cap="Source: defillama.com/chains/ethereum"
    chips={
      <>
        <Pill bg={blue}>FRAGMENTED LIQUIDITY</Pill>
        <Pill bg={purple}>COMPATIBILITY WOES</Pill>
        <Pill bg={pink}>PAINFUL UX</Pill>
      </>
    }
  />
);

const AbstractionEra: Page = () => (
  <ImageSlide
    title={
      <>
        The Great <span style={{ color: purple }}>Abstraction</span> era
      </>
    }
    lead="After the L2 wars, everyone went back to rethink the old answers"
    img={imgJacksonPollock}
  />
);

const MassAdoption: Page = () => (
  <ImageSlide
    title={
      <>
        Here comes the <span style={{ color: pink }}>Mass Adoption</span> age
      </>
    }
    lead="Abstract all the things"
    img={imgEthereumIsDifferent}
    cap="Source: vitalik.eth.limo — Layer 2s as cultural extensions of Ethereum"
  />
);

const CAStack: Page = () => (
  <ImageSlide
    title="Spawning all kinds of tech and products"
    lead="The Chain Abstraction ecosystem map"
    img={imgCAStack}
    cap="Source: therollup.co — Chain Abstraction Market Map"
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
      Converging: <span style={{ color: purple }}>what Abstraction actually solves</span>
    </h2>
    <p style={{ fontSize: 32, fontWeight: 600, color: muted, margin: '24px 0 0' }}>
      Over the next few years, everyone's problems aligned into four buckets
    </p>
    <div style={{ display: 'flex', gap: 56, marginTop: 36, flex: 1, minHeight: 0 }}>
      <div style={{ width: 720, display: 'flex', flexDirection: 'column', gap: 30, justifyContent: 'center' }}>
        <ProblemRow dot={blue}>
          <B c={blue}>Intents + Solvers</B>: users state the what, solvers handle the how
        </ProblemRow>
        <ProblemRow dot={pink}>
          <B c={pink}>Account Abstraction</B>: programmable accounts — signing and gas abstracted
        </ProblemRow>
        <ProblemRow dot={green}>
          <B c={green}>Interoperability</B>: assets and messages move freely across chains
        </ProblemRow>
        <ProblemRow dot={purple}>
          <B c={purple}>Alternative DA Networks</B>: cheaper data availability layers
        </ProblemRow>
        <ProblemRow dot={yellow}>
          Where the four overlap: the full <B c={ink}>Chain Abstraction</B> puzzle
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
      Source: @AustinKing
    </div>
  </div>
);

const L2BeatPage: Page = () => (
  <ImageSlide
    title={
      <>
        Too many L2s? Leave it to <span style={{ color: blue }}>L2Beat</span>
      </>
    }
    img={imgL2Beat}
    cap="Source: l2beat.com"
  />
);

/* ------------------------------------------------ 06 · AA wallets */

const AAWallets: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      New species I: <span style={{ color: blue }}>Account Abstraction</span>
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
      "An account is no longer a private key — it's a programmable contract"
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={blue}>
        <B c={blue}>EIP-4337 / 3074 / 7702</B>: EOAs upgraded into smart accounts, step by step
      </Bullet>
      <Bullet dot={blue}>
        No seed phrases, <B c={blue}>sponsored gas</B>, batched txs, passkey login
      </Bullet>
      <Bullet dot={blue}>
        <B c={blue}>Social recovery</B>: lose your phone, friends bail you out — no 24 words
      </Bullet>
      <Bullet dot={blue}>
        Early players: <B c={blue}>Privy · Dynamic · ZeroDev</B>
      </Bullet>
    </div>
    <PageRefs>eips.ethereum.org (EIP-4337 · EIP-7702) · vocus.cc</PageRefs>
  </div>
);

/* ------------------------------------------------ 07 · Agentic wallets */

const AgenticWallets: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      New species II: <span style={{ color: pink }}>Agentic wallets</span>
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
      "Humans set the rules, AI spends the money"
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 48 }}>
      <Bullet dot={pink}>
        AI agents <B c={pink}>hold their own wallets</B>: auto-sign, pay, subscribe
      </Bullet>
      <Bullet dot={pink}>
        Paired with a <B c={pink}>policy engine</B>: limits, allowlists, humans on exceptions
      </Bullet>
      <Bullet dot={pink}>
        Machine-to-machine payment protocols (like <B c={pink}>x402</B>) taking shape
      </Bullet>
      <Bullet dot={pink}>
        Players: <B c={pink}>Circle · Coinbase · Cloudflare · MetaMask</B>
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
        AA itself went from <span style={{ color: blue }}>Account</span> to{' '}
        <span style={{ color: pink }}>Agentic</span>
      </>
    }
    img={imgFromAAToAgentic}
    cap="Source: @elytro_eth"
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

const FlowLink = ({
  x1,
  y1,
  x2,
  y2,
  dir = 'right',
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dir?: 'right' | 'left' | 'down';
}) => {
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
  const my = ay + (by - ay) / 2;
  const path =
    dir === 'down'
      ? `M ${ax} ${ay} C ${ax} ${my}, ${bx} ${my}, ${bx} ${by - 12}`
      : dir === 'left'
        ? `M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx + 12} ${by}`
        : `M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx - 12} ${by}`;
  const head =
    dir === 'down'
      ? `${bx - 12},${by - 20} ${bx},${by} ${bx + 12},${by - 20}`
      : dir === 'left'
        ? `${bx + 20},${by - 12} ${bx},${by} ${bx + 20},${by + 12}`
        : `${bx - 20},${by - 12} ${bx},${by} ${bx - 20},${by + 12}`;
  return (
    <svg style={{ position: 'absolute', left, top, pointerEvents: 'none' }} width={wdt} height={hgt}>
      <path d={path} stroke="#111111" strokeWidth={5} fill="none" strokeLinecap="round" />
      <polygon points={head} fill="#111111" />
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
        Born for UX: seedless, sponsored gas
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
      <div style={{ fontSize: 24, lineHeight: 1.45, opacity: 0.95 }}>MetaMask era — the daily driver</div>
    </div>
  </MorphElement>
);

const EvolutionFlowA: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      Evolution, first half: <span style={{ color: blue }}>the private key forks</span>
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
        desc="CLI & desktop, engineers only"
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
            desc="Trezor · OneKey — big-bag cold storage"
          />
          <FlowLabel left={100} top={745}>
            ⚡ Too clunky — normies never made it in
          </FlowLabel>
          <FlowLabel left={900} top={928}>
            🥶 Safe, but unusable daily (this road ends here)
          </FlowLabel>
          <FlowLabel left={900} top={540}>
            🌱 The ecosystem blooms down this road →
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
      Evolution, midgame: <span style={{ color: purple }}>the abstraction wave</span>
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
            title="The L2-Centric era"
            years="2020–"
            desc="Infinite Garden blooms — 53 L2s live"
          />
          <FlowLabel left={100} top={690}>
            ⚡ Ecosystem blooming, ever more chains
          </FlowLabel>
          <FlowLabel left={720} top={740}>
            ⚡ Fragmented liquidity, poor compat, bad UX
          </FlowLabel>
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1200} y1={545} x2={1310} y2={532} />
          <AANode left={1320} top={400} />
          <FlowLabel left={1320} top={690}>
            💡 Abstract all the things
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
      Evolution, second half: <span style={{ color: pink }}>AA branches out</span>
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
            title="The Great PayFi era"
            years="2024–"
            desc="Mobile takes off: stablecoin payments go daily (Fluidkey · Peanut · Payy)"
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
            title="Exchanges go all-in on AA"
            years="2024–"
            desc="Coinbase · Binance grab onchain turf with smart accounts"
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
            title="The Great AI era: Agentic"
            years="2025–"
            desc="AI agents hold wallets & pay solo (Coinbase Agentic Wallets · x402)"
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
        The L2Beat of wallets: <span style={{ color: green }}>Walletbeat</span>
      </>
    }
    lead="Every wallet lined up, graded on features and decentralization"
    img={imgWalletbeat}
    cap="Source: @walletbeat · beta.walletbeat.eth.limo"
  />
);

const SelfCustodyFading: Page = () => (
  <ImageSlide
    title={
      <>
        Is <span style={{ color: purple }}>Self Custody</span> quietly fading?
      </>
    }
    lead="Under the UX and Mass Adoption tide, self-custody grows ever more niche"
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
      Side quest: <span style={{ color: blue }}>institutional custody history</span>
    </Heading>
    <div style={{ marginTop: 64 }}>
      <Steps>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={ink} year="2010" name="Mt. Gox" desc="Year one of exchange custody (and of disasters)" />
          </div>
        </Step>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={blue} year="2013" name="BitGo" desc="Pioneered multisig 2-of-3, later embraced MPC-TSS too" />
          </div>
        </Step>
        <Step>
          <div style={{ marginBottom: 44 }}>
            <TimeNode bg={purple} year="2018" name="Coinbase Custody" desc="Compliant institutional custody goes live" />
          </div>
        </Step>
        <Step>
          <div>
            <TimeNode bg={green} year="Now" name="Fireblocks & co." desc="MPC becomes the institutional default (Anchorage · Cobo · Fidelity)" />
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
      Meanwhile multisig big brother <B c={purple}>Safe</B> (née Gnosis Safe) is still the go-to vault for individuals and institutions → next chapter
    </div>
    <PageRefs>bitgo.com · fireblocks.com</PageRefs>
  </div>
);

/* ------------------------------------------------ Part 2 */

const Divider2: Page = () => (
  <Divider bg={purple} num="02" title="Multisig vs. MPC, in Plain English" sub="Two philosophies of not putting all eggs on one key" />
);
Divider2.transition = breath;

/* ------------------------------------------------ 09 · Multisig plain */

const MultisigPlain: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Multisig: <span style={{ color: purple }}>many keys, one vault</span>
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
      "The vault has N keys — opening it takes M of them at once"
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={purple}>
        Each key <B c={purple}>signs on its own</B>; the onchain contract enforces the threshold (2-of-3, 3-of-5)
      </Bullet>
      <Bullet dot={purple}>
        Names: <B c={purple}>Safe</B> (the EVM default) · <B c={purple}>BitGo 2-of-3</B> (institutional OG, MPC flavor too)
      </Bullet>
      <Bullet dot={purple}>
        Everything is <B c={purple}>visible onchain</B>: threshold, signers, every reshuffle (P2SH / P2WSH)
      </Bullet>
    </div>
    <PageRefs>safe.global · spark.money</PageRefs>
  </div>
);

/* ------------------------------------------------ 10 · MPC plain */

const MpcPlain: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      MPC: <span style={{ color: pink }}>one key, ground into shards</span>
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
      "The full private key never exists — not even once"
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 56 }}>
      <Bullet dot={pink}>
        The key lives as <B c={pink}>key shares</B> spread across devices and cloud TEEs
      </Bullet>
      <Bullet dot={pink}>
        Signing is an <B c={pink}>offchain multi-party computation</B>: meet the threshold, never rebuild the key
      </Bullet>
      <Bullet dot={pink}>
        Onchain it looks like a <B c={pink}>plain single-sig tx</B> — the threshold stays invisible
      </Bullet>
      <Bullet dot={pink}>
        Names: <B c={pink}>Fireblocks MPC-CMP</B> · <B c={pink}>BitGo MPC-TSS</B> · Coinbase Custody
      </Bullet>
    </div>
    <PageRefs>fireblocks.com (What is MPC)</PageRefs>
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
      Head to head: <span style={{ color: purple }}>Multisig</span> vs. <span style={{ color: pink }}>MPC</span>
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
          <div style={{ fontSize: 38, fontWeight: 900, color: purple, marginBottom: 32 }}>Multisig pain points</div>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>Different per chain — nothing is portable</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>Rigid signing; reshuffles need onchain txs</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={purple}>Disaster recovery: plan ahead, run onchain</VsRow>
            </div>
          </Step>
          <Step>
            <div>
              <VsRow dot={purple}>Threshold and signers fully public onchain</VsRow>
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
          <div style={{ fontSize: 38, fontWeight: 900, color: ink, marginBottom: 32 }}>The MPC comeback</div>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>Output is a standard single sig — any chain</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>Shares refresh offchain, address stays put</VsRow>
            </div>
          </Step>
          <Step>
            <div style={{ marginBottom: 24 }}>
              <VsRow dot={ink}>Rotate signers without touching the chain</VsRow>
            </div>
          </Step>
          <Step>
            <div>
              <VsRow dot={ink}>Invisible threshold keeps ops private</VsRow>
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
      Multisig vs. MPC <span style={{ color: purple }}>showdown: four dimensions</span>
    </Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 64,
      }}
    >
      <CatCard bg={purple} title="🔑 Key Management" names="Who invented the protocol, who holds the shares" />
      <CatCard bg={blue} title="🧰 Feature & UX" names="Policy engines, liquidity rails, daily usability" />
      <CatCard bg={pink} title="🛡️ Security" names="TEE vs. HSM: where shares sleep at night" />
      <CatCard bg={green} title="📋 Compliance" names="Can it carry KYC / AML / Travel Rule?" />
    </div>
  </div>
);

/* ------------------------------------------------ Showdown ① · Key management */

const KeyManagement: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Showdown ①: <span style={{ color: purple }}>Key Management</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={purple}>
        <B c={purple}>BitGo × Silence Labs</B>: the DKLs protocol, down the MPC-TSS road
      </Bullet>
      <Bullet dot={purple}>
        Penned by Jack Doerner & Yashvanth Kondi — the <B c={purple}>Brown / Northeastern</B> school
      </Bullet>
      <Bullet dot={purple}>
        <B c={purple}>Fireblocks × Ran Canetti</B>: the CMP protocol — <B c={purple}>Boston University</B> school
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
      On stage it's a vendor war; backstage it's Brown vs. BU academia XD
    </div>
    <div style={{ marginTop: 24, fontSize: 24, fontWeight: 600, color: muted }}>
      ※ DKLs = Doerner · Kondi · Lee · shelat | CMP = Canetti · Makriyannis · Peled — all author initials
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
      Bonus round: <span style={{ color: pink }}>MPC-CMP</span> vs. <span style={{ color: purple }}>MPC-TSS</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="MPC-CMP (Fireblocks)"
        rows={
          <>
            <VsRow dot={pink}>Paillier homomorphic math for cross terms</VsRow>
            <VsRow dot={pink}>ZK proofs throughout: no out-of-bound cheats</VsRow>
            <VsRow dot={pink}>1 online round to sign (3 precomputed offline)</VsRow>
            <VsRow dot={pink}>Proactive refresh: shares reshuffle regularly</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="MPC-TSS / DKLs (BitGo)"
        rows={
          <>
            <VsRow dot={ink}>Oblivious transfer + VOLE checks, no Paillier</VsRow>
            <VsRow dot={ink}>EC points for Statistical Consistency Checks</VsRow>
            <VsRow dot={ink}>6 rounds in 2019 → 3 rounds by 2023</VsRow>
            <VsRow dot={ink}>Co-built with Silence Labs</VsRow>
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
      Different roads, same destination: standard single sigs onchain ✍️ — and both are open source
    </div>
    <PageRefs>eprint.iacr.org/2020/492 · github.com/silence-laboratories</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ①+ · MPC bottleneck */

const MpcBottleneck: Page = () => (
  <ImageSlide
    title={
      <>
        MPC's biggest bottleneck: <span style={{ color: pink }}>performance</span>
      </>
    }
    img={imgMPCFeature}
  />
);

/* ------------------------------------------------ Showdown ①++ · Performance */

const PerfShowdown: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      Bonus round II: <span style={{ color: pink }}>the performance duel</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="MPC-CMP (Fireblocks)"
        rows={
          <>
            <VsRow dot={pink}>Lower bandwidth: ~15 KB per party</VsRow>
            <VsRow dot={pink}>Heavier compute: seconds (big-number Paillier)</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="MPC-TSS / DKLs (BitGo)"
        rows={
          <>
            <VsRow dot={ink}>Higher bandwidth: ~49 KB per party</VsRow>
            <VsRow dot={ink}>Lighter compute: milliseconds (mostly EC math)</VsRow>
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
      🐢 The numbers don't compare one-to-one, but MPC is never the bottleneck —
      qualified custody stalls on manual review and compliance checks
    </div>
    <PageRefs>eprint.iacr.org/2020/492 · github.com/silence-laboratories</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ② · Feature & UX */

const FeatureUx: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      Showdown ②: <span style={{ color: blue }}>Feature & UX — settlement networks</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="Fireblocks Network"
        rows={
          <>
            <VsRow dot={pink}>Network: 2,400+ counterparties</VsRow>
            <VsRow dot={pink}>150+ chains supported</VsRow>
            <VsRow dot={pink}>CEX links: Deribit · Bybit · OKX</VsRow>
            <VsRow dot={pink}>WalletConnect: native DeFi, NFT, raw signing</VsRow>
            <VsRow dot={pink}>Exclusive: deposit routing</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="BitGo Go Network"
        rows={
          <>
            <VsRow dot={ink}>Network: 4,900+ institutions</VsRow>
            <VsRow dot={ink}>1,550+ digital assets supported</VsRow>
            <VsRow dot={ink}>CEX links: OKX · Deribit · HTX · KuCoin · Gate.io</VsRow>
            <VsRow dot={ink}>WalletConnect: native DeFi, NFT, raw signing</VsRow>
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
      One has more chains, one more assets — pick the side your counterparties live on ⚖️
    </div>
    <PageRefs>fireblocks.com (compare treasury) · bitgo.com</PageRefs>
  </div>
);

/* ------------------------------------------------ Showdown ③ · Security */

const SecurityShowdown: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      Showdown ③: <span style={{ color: pink }}>TEE</span> vs. <span style={{ color: purple }}>HSM</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg={blue}
        color="#ffffff"
        title="TEE: an isolated room inside the CPU"
        rows={
          <>
            <VsRow dot="#ffffff">Secure zone on the main chip (SGX, AWS Nitro)</VsRow>
            <VsRow dot="#ffffff">Cheap, flexible, software-updatable</VsRow>
            <VsRow dot="#ffffff">Fireblocks' MPC shares live here</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={purple}
        color="#ffffff"
        title="HSM: a dedicated standalone safe"
        rows={
          <>
            <VsRow dot="#ffffff">Tamper-proof hardware for keys & crypto only</VsRow>
            <VsRow dot="#ffffff">Tamper-resistant, self-wiping, fast signing</VsRow>
            <VsRow dot="#ffffff">BitGo's key material lives here</VsRow>
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
      Mature setups usually run both: defense in layers 🛡️
    </div>
    <PageRefs>embitel.com (TEE vs HSM)</PageRefs>
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
      Showdown ④: <span style={{ color: green }}>the six pillars of Compliance</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 52 }}>
      <ReqRow bg={blue} num="1">
        <B c={blue}>Strict Licensing Frameworks</B> — licenses in every jurisdiction
      </ReqRow>
      <ReqRow bg={purple} num="2">
        <B c={purple}>KYC & Customer Due Diligence</B> — know who your customer is
      </ReqRow>
      <ReqRow bg={pink} num="3">
        <B c={pink}>AML & Transaction Monitoring</B> — watching suspicious flows
      </ReqRow>
      <ReqRow bg={green} num="4">
        <B c={green}>The Travel Rule</B> — sender & receiver info must travel along
      </ReqRow>
      <ReqRow bg={ink} num="5">
        <B c={ink}>Asset Segregation & Proof of Reserves</B> — segregated assets, proven reserves
      </ReqRow>
      <ReqRow bg={blue} num="6">
        <B c={blue}>Tax Reporting Obligations</B> — tax reporting
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
      Your compliance tier decides who you can serve: retail, corporates, or banks 🏛️
    </div>
    <PageRefs>hackmd.io (Compliance Need) · bitgo.com (crypto regulation)</PageRefs>
  </div>
);

/* ------------------------------------------------ Compliance scorecard */

const ComplianceScorecard: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: '100px 120px' }}>
    <Heading>
      Compliance report card: <span style={{ color: pink }}>Fireblocks</span> vs. <span style={{ color: purple }}>BitGo</span>
    </Heading>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      <ProtoCard
        bg="#f4f1ea"
        title="Fireblocks: the tech-cert route"
        rows={
          <>
            <VsRow dot={pink}>SOC 1 & SOC 2 Type II, both certified</VsRow>
            <VsRow dot={pink}>ISO 27001 / 27017 / 27018 / 22301</VsRow>
            <VsRow dot={pink}>CCSS Level 3</VsRow>
            <VsRow dot={pink}>Integrates Chainalysis · Elliptic · Notabene</VsRow>
          </>
        }
      />
      <ProtoCard
        bg={yellow}
        title="BitGo: the license & insurance route"
        rows={
          <>
            <VsRow dot={ink}>CCSS Level 3, ISO 27001, SOC 2 Type II</VsRow>
            <VsRow dot={ink}>Qualified Custodian: multi-jurisdiction + 100% cold</VsRow>
            <VsRow dot={ink}>$250M insurance</VsRow>
            <VsRow dot={ink}>TRUST Network member</VsRow>
            <VsRow dot={ink}>Travel Rule flow built in (next page)</VsRow>
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
      One bets on tech certifications, the other on licenses and insurance 📜
    </div>
    <PageRefs>bitgo.com (regulation · withdrawal safeguards) · fireblocks.com (compare treasury)</PageRefs>
  </div>
);

/* ------------------------------------------------ Travel Rule flow (BitGo) */

const TravelRuleFlow: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      BitGo's <span style={{ color: green }}>Travel Rule</span> in action
    </FlowHeading>
    <Steps>
      <FlowNode left={100} top={430} w={340} bg={ink} emoji="💸" title="One withdrawal" desc="Who's the recipient?" />
      <Step>
        <div>
          <FlowLink x1={440} y1={537} x2={610} y2={327} />
          <FlowLink x1={440} y1={537} x2={610} y2={767} />
          <FlowNode left={620} top={220} w={400} bg={purple} emoji="🏛" title="To: a VASP" desc="Exchange or custodian" />
          <FlowNode left={620} top={660} w={400} bg={blue} emoji="👤" title="To: external EOA" desc="Your self-custody wallet" />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1020} y1={327} x2={1230} y2={247} />
          <FlowLink x1={1020} y1={327} x2={1230} y2={527} />
          <FlowNode left={1240} top={140} w={560} bg={green} emoji="✅" title="Already in TRUST Network" desc="On the list → trade away" />
          <FlowNode
            left={1240}
            top={420}
            w={560}
            bg={yellow}
            fg={ink}
            emoji="📝"
            title="Not on the list"
            desc="File their VASP info, allowlist → trade"
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
            desc="A tiny transfer in 24h proves ownership"
          />
          <FlowLabel left={100} top={975}>
            📥 Unknown deposit? Admins must file the sender's identity and residence
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
      The Travel Rule ecosystem: <span style={{ color: green }}>compliance cliques</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 60 }}>
      <TimeNode bg={blue} year="2,100+" name="Sumsub" desc="The widest-coverage compliance provider" />
      <TimeNode bg={purple} year="200+" name="TRUST Alliance" desc="Coinbase · Kraken · OKX · PayPal · Circle…" />
      <TimeNode bg={pink} year="200+" name="Chainalysis × Notabene" desc="Onchain forensics × Travel Rule messaging" />
      <TimeNode bg={green} year="150+" name="VerifyVASP" desc="Asia-centric: Bitfinex · Crypto.com · Bitget · WooX · BingX · FTX…" />
      <TimeNode bg={ink} year="116" name="Global Travel Rule" desc="Binance-led, with Sumsub × Fireblocks assists" />
    </div>
    <div style={{ marginTop: 48, fontSize: 26, fontWeight: 600, color: muted }}>
      ※ Plenty of exchanges two-time: Crypto.com, Bitget, and Amber each sit in two alliances
    </div>
    <PageRefs>verifyvasp.com · globaltravelrule.com · sumsub.com</PageRefs>
  </div>
);

/* ------------------------------------------------ Travel Rule open standard */

const TravelRuleStandard: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Next up: an <span style={{ color: purple }}>open standard</span> for the Travel Rule
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={purple}>
        Every alliance speaks its own dialect → <B c={purple}>21 Analytics</B> pushes <B c={purple}>TRP</B> (Travel Rule Protocol)
      </Bullet>
      <Bullet dot={purple}>
        <B c={purple}>IVMS 101</B>: one inter-VASP message format — first, speak the same language
      </Bullet>
      <Bullet dot={purple}>
        Backing it: <B c={purple}>Sygna (VerifyVASP) · Notabene · TRUST Alliance</B>
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
      From cliques to open standards — compliance's TCP/IP moment 🌐
    </div>
    <PageRefs>21analytics.co (IVMS / TRP)</PageRefs>
  </div>
);

/* ------------------------------------------------ Safe in enterprise */

const SafeEnterprise: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      <span style={{ color: green }}>Safe</span> storms the enterprise arena
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>Liminal</B>: an enterprise custody platform built on Safe
      </Bullet>
      <Bullet dot={green}>
        AML handled by <B c={green}>TRM Labs</B>, Travel Rule by <B c={green}>Notabene</B>
      </Bullet>
      <Bullet dot={green}>
        Multisig base + compliance add-ons = a new arena beyond DAOs
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
      Open-source multisig grows institution-grade compliance — Safe's second act 📈
    </div>
    <PageRefs>liminalcustody.com · trmlabs.com · notabene.id</PageRefs>
  </div>
);

/* ------------------------------------------------ Custodial compliance transaction flow */

const ComplianceTxFlow: Page = () => (
  <div style={flowStage}>
    <FlowHeading>
      Life of a custodial tx: <span style={{ color: green }}>Compliance on watch</span>
    </FlowHeading>
    <Steps>
      <FlowNode left={100} top={210} w={480} bg={ink} emoji="🧾" title="① Tx initiated" desc="User / API files a withdrawal" />
      <Step>
        <div>
          <FlowLink x1={580} y1={330} x2={710} y2={330} />
          <FlowNode
            left={720}
            top={210}
            w={480}
            bg={blue}
            emoji="🛡"
            title="② Policy Engine"
            desc="Limits, allowlists, approval matrix"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1200} y1={330} x2={1330} y2={330} />
          <FlowNode
            left={1340}
            top={210}
            w={480}
            bg={purple}
            emoji="🔍"
            title="③ Compliance screening"
            desc="AML scoring, sanctions, Travel Rule"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1580} y1={470} x2={1580} y2={630} dir="down" />
          <FlowNode
            left={1340}
            top={640}
            w={480}
            bg={pink}
            emoji="👀"
            title="④ Manual review"
            desc="High-risk or over-limit → four-eyes"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={1330} y1={760} x2={1210} y2={760} dir="left" />
          <FlowNode
            left={720}
            top={640}
            w={480}
            bg={yellow}
            fg={ink}
            emoji="✍️"
            title="⑤ MPC / HSM signing"
            desc="Shares co-sign — full key never shows"
          />
        </div>
      </Step>
      <Step>
        <div>
          <FlowLink x1={710} y1={760} x2={590} y2={760} dir="left" />
          <FlowNode
            left={100}
            top={640}
            w={480}
            bg={green}
            emoji="⛓"
            title="⑥ Broadcast & report"
            desc="Settle onchain, audit trail, SARs"
          />
        </div>
      </Step>
    </Steps>
    <PageRefs>fireblocks.com (custody compliance) · bitgo.com</PageRefs>
  </div>
);

/* ------------------------------------------------ 12 · MPC bonus */

const MpcBonus: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      MPC extra credit: <span style={{ color: pink }}>still in plain English</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={pink}>
        <B c={pink}>Key Refresh</B>: shares reshuffle on schedule; address and pubkey stay put
      </Bullet>
      <Bullet dot={pink}>
        Attackers must collect all shares <B c={pink}>within one refresh window</B> — brutal
      </Bullet>
      <Bullet dot={pink}>
        <B c={pink}>Offline Signing</B>: precompute the early rounds, sign in one shot
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
      ⚠️ Careful: a vendor holding enough shares is <span style={{ color: yellow }}>still custody at heart</span> (custodial)
    </div>
    <div style={{ marginTop: 24, fontSize: 24, fontWeight: 600, color: muted }}>
      ※ Much of this chapter draws on Fireblocks' own materials — season the numbers to taste
    </div>
    <PageRefs>fireblocks.com (7 Reasons Why MPC)</PageRefs>
  </div>
);

/* ------------------------------------------------ Part 3 */

const Divider3: Page = () => (
  <Divider bg={green} num="03" title="Wallet Picking Guide for You & Your Team" sub="UX × Feature × Safety — find your seat" />
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
      Before picking, ask the <span style={{ color: green }}>four dimensions</span>
    </Heading>
    <div style={{ display: 'flex', gap: 28, marginTop: 72, height: 500 }}>
      <DimCard bg={blue} title="UX" desc="Learning curve, signing flow smoothness, mobile feel" />
      <DimCard bg={pink} title="Feature" desc="Multichain support, DeFi hooks, automation & policy control" />
      <DimCard bg={green} title="Safety" desc="Key management, disaster recovery, vendor & single-point risk" />
      <DimCard bg={purple} title="Privacy" desc="Onchain footprint, address linkage, who sees your data" />
    </div>
  </div>
);

/* ------------------------------------------------ 15 · Personal guide */

const PersonalGuide: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Personal guide: <span style={{ color: green }}>seat yourself by bag size</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>Daily pocket money</B> → browser / mobile wallets (Rabby, Ambire, imToken)
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>Mid-size savings</B> → hardware cold wallets (Trezor, OneKey)
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>Big & long-term</B> → Safe multisig or MPC — no single slip wipes you out
      </Bullet>
    </div>
    <PageRefs>ethereum.org/wallets/find-wallet</PageRefs>
  </div>
);

/* ------------------------------------------------ Wallet MBTI quiz */

const WalletMbtiQuiz: Page = () => (
  <div
    style={{
      ...fill,
      background: pink,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      gap: 100,
      padding: '100px 160px',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 6, opacity: 0.9 }}>INTERACTIVE BREAK 🔮</div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 100,
          fontWeight: 900,
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: -2,
        }}
      >
        Your turn:
        <br />
        test your wallet MBTI
      </h2>
      <div style={{ fontSize: 36, fontWeight: 600, lineHeight: 1.5 }}>
        One minute, UX × Feature × Safety × Privacy —
        <br />
        find your wallet personality 🏃🧊🤝🏛🪄🤖
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, opacity: 0.9 }}>wallet-mbti.ryanycw.dev</div>
    </div>
    <div style={{ flexShrink: 0 }}>
      <img
        src={qrWalletMBTI}
        style={{ width: 520, height: 520, borderRadius: 28, background: '#ffffff', padding: 24 }}
      />
    </div>
  </div>
);

/* ------------------------------------------------ 16 · Team guide */

const TeamGuide: Page = () => (
  <div style={{ ...fill, background: 'var(--osd-bg)', color: 'var(--osd-text)', padding: 120 }}>
    <Heading>
      Team guide: <span style={{ color: green }}>transparent or flexible — pick one</span>
    </Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 64 }}>
      <Bullet dot={green}>
        <B c={green}>Small teams / DAOs</B> → Safe: transparent, governance-friendly, mature
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>Institutions</B> → MPC custody (Fireblocks, BitGo, Cobo) + policy engine
      </Bullet>
      <Bullet dot={green}>
        <B c={green}>The compliance trio</B> → KYC / AML / Travel Rule — let custodians carry it
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
      The soul-searching question: whoever holds enough keys (or shares) is the custodian 🔑
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
      Three things to take home 🎒
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
      <Takeaway bg={blue} num="1">
        Wallets keep evolving: from one private key to no full key at all
      </Takeaway>
      <Takeaway bg={purple} num="2">
        Multisig is transparent onchain, MPC flexible offchain — no absolute winner
      </Takeaway>
      <Takeaway bg={green} num="3">
        Picking = UX × Feature × Safety — sized by your bag and your team
      </Takeaway>
    </div>
    <div style={{ marginTop: 88, fontSize: 30, fontWeight: 700 }}>
      Thanks! — @ryanycw · Full research notes: hackmd.io/@ryanycw
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
      Thank you 💐
    </div>
    <div style={{ fontSize: 52, fontWeight: 800, marginTop: 72 }}>Nic · Mason · PJ</div>
    <div style={{ fontSize: 36, fontWeight: 600, marginTop: 36, opacity: 0.95 }}>
      …and the remote-work idlers who cowork with me
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
      Shameless plugs <span style={{ color: pink }}>📣</span>
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
              Scan to join · luma.com/8z5ys4rl
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
              Scan to sign up · luma.com/5wmofnwc
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
      FUTUREMODE <span style={{ color: purple }}>double feature ⚡</span>
    </Heading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 48, marginTop: 48 }}>
      <img
        src={imgFutremodePanel}
        style={{ flex: 1, minWidth: 0, height: 310, objectFit: 'contain', borderRadius: 20 }}
      />
      <div style={{ width: 420, flexShrink: 0 }}>
        <div style={{ fontSize: 40, fontWeight: 900 }}>ETH Panel</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>Panel coming up</div>
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
          <div style={{ fontSize: 24, fontWeight: 600, color: muted, marginTop: 10 }}>Scan to sign up</div>
        </div>
      </div>
    </div>
  </div>
);

// Presenter-mode speaker notes — one entry per page, aligned with the export default order.
export const notes: (string | undefined)[] = [
  undefined, // 1 Cover
  undefined, // 2 Photos for a Burner
  undefined, // 3 Agenda
  undefined, // 4 Part 1 divider
  undefined, // 5 Early days
  undefined, // 6 Four schools
  undefined, // 7 Infinite Garden
  undefined, // 8 Mass Adoption
  undefined, // 9 L2-Centric
  undefined, // 10 Great Abstraction era
  undefined, // 11 CA Stack
  undefined, // 12 Abstraction Problems
  undefined, // 13 L2Beat
  undefined, // 14 AA
  undefined, // 15 Agentic
  undefined, // 16 From AA to Agentic
  undefined, // 17 Evolution first half
  undefined, // 18 Evolution midgame
  undefined, // 19 Evolution second half
  undefined, // 20 Walletbeat
  undefined, // 21 Self Custody
  undefined, // 22 Institutional custody history
  undefined, // 23 Part 2 divider
  "P2SH / P2WSH in plain terms: Bitcoin's script-based payment formats — funds are paid to the hash of a rule (a script), and to spend you must reveal the full rule (which three pubkeys, how many signatures) for the whole network to verify. P2SH is BIP-16 from 2012, addresses start with 3; P2WSH is the SegWit upgrade, bc1q prefix, cheaper fees — but the threshold and signers are still fully public. That is exactly the contrast with MPC's invisible threshold on the next page.", // 24 Multisig in plain English
  undefined, // 25 MPC in plain English
  undefined, // 26 Head to head
  undefined, // 27 Showdown overview
  "DKLs = Doerner · Kondi · Lee · shelat (Brown / Northeastern); CMP = Canetti · Makriyannis · Peled (Boston University). Both protocol names are author initials — the joke: on stage it's BitGo vs Fireblocks, backstage it's a cryptographers' inter-school rivalry.", // 28 Key Management
  "How to explain the ZKP: during signing everyone exchanges encrypted numbers — how do you know nobody smuggled in a huge number to break things (out-of-bound attack)? CMP attaches a zero-knowledge proof to every ciphertext: proof that my number is within the legal range, without revealing the number itself — like handing in a sealed exam with a tamper-evident stamp. Terms: Paillier does the homomorphic math on secret shares; VOLE = Vector Oblivious Linear Evaluation, the protocol that verifies OT multiplication results. Proactive refresh matters more in CMP because Paillier key generation is computationally expensive.", // 29 CMP vs TSS
  undefined, // 30 MPC performance bottleneck (image)
  "The numbers don't compare one-to-one (different test setups and party counts), but overall MPC is never the bottleneck — the real bottleneck for qualified custody lies in the other manual checks and regulatory checks.", // 31 Performance duel
  "Typical division of labor: screening goes to Chainalysis / Elliptic, Travel Rule to Notabene; the slowest stages of the whole pipeline are 3 and 4 — echoing the previous page: the bottleneck isn't MPC.", // 32 Compliance tx flow
  undefined, // 33 MPC extra credit
  undefined, // 34 Feature & UX (settlement networks)
  undefined, // 35 TEE vs HSM
  "Bank-grade stacks even more on top: MiCA, DORA, Basel, NIST CSF 2.0; custodians usually handle sanctions screening, onchain forensics, and behavioral baselining for you.", // 36 Six pillars of Compliance
  undefined, // 37 Compliance report card
  "TRUST = Travel Rule Universal Solution Technology. The Small Deposit Test is aka the Satoshi Test: send a small amount from that address within 24 hours to prove the external hardware/software wallet is yours. On unidentified incoming deposits, wallet admins are asked to file the sender's category and country of residence.", // 38 Travel Rule flow
  undefined, // 39 Travel Rule ecosystem
  undefined, // 40 Travel Rule open standard
  undefined, // 41 Safe in Enterprise
  undefined, // 42 Part 3 divider
  undefined, // 43 Four dimensions
  undefined, // 44 Personal guide
  undefined, // 45 Wallet MBTI quiz QR
  undefined, // 46 Team guide
  undefined, // 47 Closing
  undefined, // 48 Thanks
  undefined, // 49 Promo (ETHTaipei · TLDR)
  undefined, // 50 FUTUREMODE double feature
];

export const meta: SlideMeta = {
  title: 'Wallet Landscape 2026',
  createdAt: '2026-08-22T07:52:52.150Z',
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
  MpcBottleneck,
  PerfShowdown,
  ComplianceTxFlow,
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
  WalletMbtiQuiz,
  TeamGuide,
  Closing,
  Thanks,
  PromoEvents,
  PromoFuturemode,
] satisfies Page[];
