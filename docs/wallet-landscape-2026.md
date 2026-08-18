# 2026 錢包大盤點 — 內容稿

> 這份文件對應 `slides/wallet-landscape-2026/index.tsx` 的逐頁內容（共 39 頁）。
> 直接編輯這裡的文字，再請 Claude 同步回 slide 即可。
> 標記說明：【底色】= 該頁或色塊的背景色；**粗體** = 頁面上的彩色強調字；每頁下方附參考連結。
> 參考資料在 slide 上的呈現：內容頁左下角有「參考：…」小字（短網域），圖片頁右下角有「來源：…」；本文件保留完整連結。

---

## Page 1 · Cover【黃底】

- Eyebrow：`@RYANYCW · 2026`
- 主標：**2026 錢包大盤點**
- 副標：Wallet Landscape in 2026 — 從一把私鑰，到沒有完整私鑰
- 三顆膠囊：`錢包進化史`（藍）｜`MULTISIG vs. MPC`（紫）｜`挑選指南`（綠）

> 參考：[完整研究筆記（HackMD）](https://hackmd.io/@ryanycw/S1tJs_sIMe)

---

## Page 2 · Agenda「今天聊三件事」

| # | 標題 | 副標 |
|---|------|------|
| 01（藍） | 錢包進化史の盤點 | 從 CLI 到 Agentic：這 15 年錢包都經歷了什麼 |
| 02（紫） | Multisig vs. MPC 白話文 | 兩種「不要把雞蛋放同一把鑰匙」的哲學 |
| 03（綠） | 個人 & 團隊錢包挑選指南 | 用 UX × Feature × Safety 找到你的那一款 |

---

## Page 3 · Part 1 章節頁【藍底】

- PART 01
- 主標：錢包進化史の盤點
- 副標：15 年，五個世代，一路從指令列走到 AI 代理

---

## Page 4 · 早期時代：從 CLI 到 Mist

- **CLI 工具**：工程師限定，指令列直接簽名、廣播交易
- **Mist / Ethereum Wallet**：官方桌面錢包，最終停止維護
- **網頁工具**：MyEtherWallet 世代，私鑰在瀏覽器裡貼來貼去

> 【黃色橫幅・逐步顯示】跟不上多鏈、DeFi、NFT 的爆發 → 集體退場 👋

> 參考：[ethereum.org 錢包總覽](https://ethereum.org/zh-tw/wallets/find-wallet/) · [Top 7 Ethereum Wallets](https://cryptomus.com/tw/blog/top-7-ethereum-wallets)

---

## Page 5 · 百花齊放：日常錢包四大流派

| 卡片 | 內容 |
|------|------|
| 🧩 瀏覽器擴充（藍） | MetaMask · Rabby · Phantom · Rainbow · Trust |
| 🧊 硬體冷錢包（紫） | Ledger · Trezor · OneKey · Keystone · imKey |
| 📱 行動優先新勢力（粉） | Fluidkey · Peanut · Payy |
| 🏦 交易所錢包（綠） | Coinbase · Binance · OKX · Bybit · Bitget |

> 參考：[ethereum.org 錢包總覽](https://ethereum.org/zh-tw/wallets/find-wallet/)

---

## Page 6 · EF 的新論述：Infinite Garden【圖】

- Lead：隨著生態百花齊放，以太坊基金會開啟一個新敘事
- 圖：`assets/Infinite Garden.png`（來源標註：Ethereum Foundation）

---

## Page 7 · 迎來 Mass Adoption 年代【圖】

- Lead：所有東西都要 Abstraction
- 圖：`assets/Ethereum is different.png`

> 參考：[Vitalik: Layer 2s as cultural extensions of Ethereum](https://vitalik.eth.limo/general/2024/05/29/l2culture.html)

---

## Page 8 · 迎接 L2-Centric 時代【圖】

- 三顆膠囊：`流動性破碎`（藍）｜`相容性問題`（紫）｜`UX 很差`（粉）
- 圖：`assets/53L2s.png`

> 參考：[DefiLlama — Ethereum chains](https://defillama.com/chains/ethereum)

---

## Page 9 · 大 Abstraction 時代【圖】

- Lead：L2 大戰之後，大家開始重新思考既有的解法
- 圖：`assets/JacksonPollock.png`

---

## Page 10 · 發展出各種技術和產品【圖】

- Lead：Chain Abstraction 的生態地圖
- 圖：`assets/CAStack.png`

> 參考：[The Rollup: Chain Abstraction Market Map](https://therollup.co/research/chain-abstraction-market-map-and-ecosystem-overivew)

---

## Page 11 · 開始收斂：Abstraction 要解決什麼【左列點＋右圖】

- Lead：接下來幾年，各家想解的問題漸漸對齊成四大塊
- 左側列點（對應圖中四個圓）：
  - **Intents + Solvers**：使用者只表達意圖，「怎麼做」交給 solver
  - **Account Abstraction**：帳戶可編程，簽名與 gas 都能抽象
  - **Interoperability**：跨鏈互通，資產與訊息自由移動
  - **Alternative DA Networks**：更便宜的資料可用性層
  - 四者的交集，就是 **Chain Abstraction** 的完整拼圖
- 右側圖：`assets/Abstraction Problems.png`

> 參考：[@AustinKing 推文](https://x.com/AustinKing/status/1841599481344606498)

---

## Page 12 · 看不完的 L2？交給 L2Beat【圖】

- 圖：`assets/L2Beat.png`（來源標註：l2beat.com）

> 參考：[L2Beat](https://l2beat.com/)

---

## Page 13 · 新物種 I：帳戶抽象 AA

> 【藍色橫幅】「帳戶不再是一把私鑰，而是一個可編程的合約」

- **EIP-4337 / 3074 / 7702**：把 EOA 一步步升級成智能帳戶
- 免助記詞、**gas 代付**、批次交易、passkey 登入
- **Social recovery**：手機掉了找朋友救，不用抄 24 個單字
- 曾經的玩家：**Privy · Dynamic · ZeroDev**

> 參考：[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) · [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702)

---

## Page 14 · 新物種 II：Agentic 錢包

> 【粉色橫幅】「人類設規則，AI 自己花錢」

- AI agent **自己持有錢包**：自動簽名、付款、訂閱服務
- 搭配**政策引擎**：限額、白名單、例外才找人類批准
- 機器對機器的付款協議（如 **x402**）開始成形
- 玩家：**Circle · Coinbase · Cloudflare · MetaMask**

> 參考：[Narval](https://www.narval.xyz/) · [Fireblocks: Wallet Infrastructure](https://www.fireblocks.com/blog/wallet-infrastructure-institution-competitive-edge)

---

## Page 15 · AA 也從 Account 變成 Agentic【圖】

- 圖：`assets/From AA to Agentic.png`

> 參考：[@elytro_eth 推文](https://x.com/elytro_eth/status/1579224421403070464)

---

## Page 16 · 演化上半場：私鑰的分岔路（分岔流程圖・逐步顯示）

三頁連貫 timeline 之一：Extension Base 節點會用 morph 動畫「滑」到下一頁。

- 起點：⌨️ **CLI / Mist**（黑卡）2009–2016 — 指令列與桌面錢包，工程師限定
  - ⚡ 痛點：難用，一般人進不來 → 分岔出兩條路
- 分岔 ①：🧩 **Extension Base**（藍卡）2016– — MetaMask 世代，日常操作主力
  - 🌱 生態在這條路上百花齊放 →（接下一頁）
- 分岔 ②：🧊 **Cold Wallet**（紫卡）2014– — Ledger · Trezor，大額冷保管
  - 🥶 安全，但日常用不動（此路到此為止）

> 參考：[ethereum.org 錢包總覽](https://ethereum.org/zh-tw/wallets/find-wallet/)

---

## Page 17 · 演化中場：抽象化的浪潮（流程圖・逐步顯示）

承接 Page 6–11 的生態脈絡：Extension Base 從上一頁 morph 滑入左側，AA 再 morph 到下一頁。

- 🧩 **Extension Base**（藍卡，與上一頁同一顆節點）
  - ⚡ 生態百花齊放，鏈越開越多
- → 🌐 **L2-Centric 時代**（黃卡）2020– — Infinite Garden 開花，53 條 L2 齊發
  - ⚡ 流動性破碎、相容性差、UX 爛
- → 🪄 **Account Abstraction**（粉卡）2023– — 為了 UX 而生：免助記詞、gas 代付
  - 💡 一切都要 Abstraction

> 參考：[帳戶抽象（AA）與智能合約錢包完整解析（vocus）](https://vocus.cc/article/6a30eb88fd8978000120723c) · [Vitalik: L2 culture](https://vitalik.eth.limo/general/2024/05/29/l2culture.html) · [The Rollup: Chain Abstraction Market Map](https://therollup.co/research/chain-abstraction-market-map-and-ecosystem-overivew)

---

## Page 18 · 演化下半場：AA 開枝散葉（扇形流程圖・逐步顯示）

AA 節點從上一頁 morph 滑入左側，向右扇出三條路：

- 🪄 **Account Abstraction**（粉卡，與上一頁同一顆節點）
- → 📱 **大 PayFi 時代**（藍卡）2024– — Mobile 端起飛：穩定幣付款日常化（Fluidkey · Peanut · Payy）
- → 🏦 **交易所全押 AA**（紫卡）2024– — Coinbase · Binance 用智能帳戶搶佔 onchain 版圖
- → 🤖 **大 AI 時代：Agentic**（綠卡）2025– — AI 代理自己持錢包、自動付款（Coinbase Agentic Wallets · x402）

> 參考：[The Block: Coinbase rolls out Agentic Wallets](https://www.theblock.co/news/business/2026-02-11-coinbase-rolls-out-ai-tool-to-give-any-agent-a-wallet-389524) · [Coinbase: Agentic Wallets](https://www.coinbase.com/zh-tw/developer-platform/discover/launches/agentic-wallets) · [imToken: 從 Web2 到 Web3 走向 Agentic Wallet](https://support.token.im/hc/zh-tw/articles/59120924972697)

---

## Page 19 · 錢包界的 L2Beat：Walletbeat【圖】

- Lead：把各家錢包一字排開，逐項檢視功能與去中心化程度
- 圖：`assets/Walletbeat.png`

> 參考：[@walletbeat 推文](https://x.com/walletbeat/status/2088497593940606991) · [beta.walletbeat.eth.limo](https://beta.walletbeat.eth.limo/)

---

## Page 20 · Self Custody 漸漸式微？【圖】

- Lead：UX 與 Mass Adoption 的浪潮下，自我保管越來越小眾
- 圖：`assets/Self Custody.png`（原檔名含 `???` 已改名，`?` 會讓打包工具誤判）
- 承接下一頁：機構託管進化史

---

## Page 21 · 支線任務：機構託管進化史（時間軸・逐步顯示）

| 年份 | 事件 | 說明 |
|------|------|------|
| 2010（黑） | Mt. Gox | 交易所託管元年（也是慘案元年） |
| 2013（藍） | BitGo | Multisig 2-of-3 開山，後來也擁抱 MPC-TSS |
| 2018（紫） | Coinbase Custody | 合規機構託管正式上線 |
| 現在（綠） | Fireblocks 等 | MPC 成為機構標配（Anchorage · Cobo · Fidelity） |

> 【底部備註】而多簽老大哥 **Safe**（前 Gnosis Safe）依然是個人與機構的金庫標配 → 下一章詳談

> 參考：[BitGo: Institutional Crypto Wallets](https://www.bitgo.com/resources/blog/institutional-crypto-wallets-how-they-work/) · [Fireblocks: Custody Strategy for Banks](https://www.fireblocks.com/blog/digital-asset-custody-strategy-banks)

---

## Page 22 · Part 2 章節頁【紫底】

- PART 02
- 主標：Multisig vs. MPC 白話文
- 副標：兩種「不要把雞蛋放同一把鑰匙」的哲學

---

## Page 23 · Multisig：多把鑰匙開一個保險箱

> 【紫色橫幅】「保險箱配 N 把鑰匙，開箱要同時湊滿 M 把」

- 每把私鑰**獨立簽名**，鏈上合約驗證門檻（2-of-3、3-of-5）
- 代表：**Safe**（EVM 標配）、**BitGo 2-of-3**（機構鼻祖，也有 MPC 版）
- 鏈上**看得一清二楚**：門檻、簽名者、每次改組（P2SH / P2WSH）

**Speaker Notes**：P2SH / P2WSH = 比特幣的「腳本式付款」格式，花錢時要攤開完整規則給全網驗證，所以門檻與簽名者全公開 — 正是 MPC「門檻隱形」的對比點。

> 參考：[Safe: Best Wallets for Institutions](https://safe.global/blog/the-best-crypto-wallets-for-institutions) · [Spark: MPC vs Multisig Custody](https://www.spark.money/research/bitcoin-mpc-vs-multisig-custody)

---

## Page 24 · MPC：一把鑰匙磨成碎片

> 【粉色橫幅】「完整私鑰，從頭到尾都沒存在過」

- 私鑰以 **key share 碎片**分散在多方裝置與雲端 TEE
- 簽名是一場**鏈下多方運算**：湊門檻，但不拼回私鑰
- 鏈上看起來就是**普通單簽交易**，門檻大小外人看不出
- 代表：**Fireblocks MPC-CMP**、**BitGo MPC-TSS**、Coinbase Custody

> 參考：[Fireblocks: What is MPC](https://www.fireblocks.com/report/what-is-mpc) · [Fireblocks: 7 Reasons Why MPC](https://www.fireblocks.com/blog/7-reasons-why-mpc-is-the-next-generation-of-private-key-security)

---

## Page 25 · 正面對決：Multisig vs. MPC（左右兩欄・逐步顯示）

**Multisig 的痛點（米色卡）**
- 每條鏈實作不同，跨鏈不通用
- 簽名流程死板，改組要上鏈交易
- 災難復原得提前規劃、鏈上執行
- 門檻與簽名者全鏈上公開

**MPC 的回應（黃卡）**
- 簽出來是標準單簽，鏈鏈通吃
- 碎片鏈下 refresh，地址不用換
- 簽名者輪替不動鏈上任何東西
- 門檻隱形，保留操作隱私

> 參考：[Fireblocks: MPC vs Multi-sig](https://www.fireblocks.com/blog/mpc-vs-multi-sig) · [Spark: MPC vs Multisig Custody](https://www.spark.money/research/bitcoin-mpc-vs-multisig-custody)

---

## Page 26 · Multisig vs. MPC 大評比：四個維度

| 卡片 | 說明 |
|------|------|
| 🔑 Key Management（紫） | 協議是誰發明的、碎片由誰保管 |
| 🧰 Feature & UX（藍） | 政策引擎、流動性串接、日常好用度 |
| 🛡️ Security（粉） | TEE vs. HSM：碎片放哪裡才安心 |
| 📋 Compliance（綠） | KYC / AML / Travel Rule 扛得動嗎 |

---

## Page 27 · 大評比 ①：Key Management

- **BitGo × Silence Labs**：採 DKLs 協議，走 MPC-TSS 路線
- 執筆人 Jack Doerner、Yashvanth Kondi — **Brown / Northeastern** 學派
- **Fireblocks × Ran Canetti**：CMP 協議 — **Boston University** 學派

> 【黃色橫幅】檯面上是廠商大戰，檯面下是 Brown vs. BU 的學術較勁 XD

> 【灰字註解】※ DKLs = Doerner · Kondi · Lee · shelat｜CMP = Canetti · Makriyannis · Peled — 都是作者姓氏縮寫

> 參考：[Silence Labs DKLs23（GitHub）](https://github.com/silence-laboratories/silent-shard-dkls23-ll) · [CMP 論文（ePrint 2020/492）](https://eprint.iacr.org/2020/492)

---

## Page 28 · 加映場：MPC-CMP vs. MPC-TSS（左右兩欄）

**MPC-CMP（Fireblocks・米色卡）**
- Paillier 同態加密算跨項相乘
- 全程附 ZK proof：防超界、防作弊
- 線上 1 round 出簽（離線預算 3 rounds）
- Proactive refresh：碎片定期洗牌

**MPC-TSS / DKLs（BitGo・黃卡）**
- OT 不經意傳輸＋VOLE 驗算，免 Paillier
- EC 驗證點做 Statistical Consistency Checks
- 2019 年 6 rounds → 2023 年 3 rounds
- 與 Silence Labs 合作打造

兩張卡底部各有一條**黑底突顯列**：
- CMP：📶 頻寬低 15 KB/方 · 🧮 運算重（秒級）
- DKLs：📶 頻寬高 49 KB/方 · 🧮 運算輕（毫秒級）

> 【黑色橫幅】殊途同歸：鏈上都只是標準單簽 ✍️ — 而且兩邊都有開源實作

**Speaker Notes（已寫入 slide，presenter mode 按 F 後可見）**：ZKP 介紹話術（密封考卷附防偽章）＋術語（Paillier 做 secret share 同態運算；VOLE 驗證 OT 乘法正確性；proactive refresh 在 CMP 重要因為 Paillier keygen 貴）。

> 參考：[CMP 論文（ePrint 2020/492）](https://eprint.iacr.org/2020/492) · [Silence Labs DKLs23（GitHub）](https://github.com/silence-laboratories/silent-shard-dkls23-ll) · [Fireblocks: What is MPC](https://www.fireblocks.com/report/what-is-mpc)

---

## Page 29 · 加映場 II：效能對決（左右兩欄）

**MPC-CMP（Fireblocks・米色卡）**
- 頻寬較低：每方約 15 KB
- 運算較重：秒級（Paillier 大數運算）

**MPC-TSS / DKLs（BitGo・黃卡）**
- 頻寬較高：每方約 49 KB
- 運算較輕：毫秒級（EC 運算為主）

> 【黑色橫幅】🐢 數據難以一比一比較，但瓶頸從來不是 MPC — 合格託管卡在人工審核與法遵檢查

> 參考：[CMP 論文（ePrint 2020/492）](https://eprint.iacr.org/2020/492) · [Silence Labs DKLs23（GitHub）](https://github.com/silence-laboratories/silent-shard-dkls23-ll)

---

## Page 30 · 大評比 ②：Feature & UX

- **Fireblocks**：政策引擎長在託管層，直通交易所 / OTC 流動性
- **BitGo**：多簽＋TSS 雙產品線，HSM 保管，UTXO 鏈最硬
- **Safe**：EVM 生態整合之王，模組化、DAO 治理最順手

> 【藍色橫幅】好不好用，取決於資產住哪條鏈、誰負責按按鈕

> 參考：[Fireblocks: Wallet Infrastructure](https://www.fireblocks.com/blog/wallet-infrastructure-institution-competitive-edge) · [BitGo: Institutional Crypto Wallets](https://www.bitgo.com/resources/blog/institutional-crypto-wallets-how-they-work/) · [Safe: Best Wallets for Institutions](https://safe.global/blog/the-best-crypto-wallets-for-institutions)

---

## Page 31 · 大評比 ③：TEE vs. HSM（左右兩欄）

**TEE：處理器裡的隔離小房間（藍卡）**
- 主晶片劃出的安全區（SGX、AWS Nitro）
- 便宜、彈性、可軟體更新
- Fireblocks 的 MPC 碎片住這裡

**HSM：獨立的專職保險櫃（紫卡）**
- 專用防拆硬體，只管金鑰與加密
- 防篡改、可自毀、簽名效能強
- BitGo 的金鑰材料住這裡

> 【黑色橫幅】成熟方案通常兩個都用：分層防禦 🛡️

> 參考：[Embitel: TEE vs HSM](https://www.embitel.com/blog/embedded-blog/choosing-between-tee-and-hsm-for-automotive-security-mechanism)

---

## Page 32 · 大評比 ④：Compliance Level

- **基本盤**：牌照、KYC / CDD、AML 交易監控、Travel Rule
- **進階**：資產隔離、儲備證明（PoR）、稅務申報
- **銀行級**：MiCA、DORA、Basel、NIST CSF 2.0 全套
- 託管商代勞：制裁名單篩查、鏈上鑑識、行為基線分析

> 【綠色橫幅】合規等級決定你能服務誰：散戶、企業，還是銀行 🏛️

> 參考：[Compliance Need 筆記（HackMD）](https://hackmd.io/vE8eb0sTT2OKB3UAhOP3bA#Compliance-Need) · [Fireblocks: Custody Compliance for Banks](https://www.fireblocks.com/blog/digital-asset-custody-compliance-banks) · [Fireblocks: Stablecoin Compliance](https://www.fireblocks.com/blog/how-to-navigate-stablecoin-compliance-kyc-travel-rule-transaction-monitoring)

---

## Page 33 · MPC 加分題：還是講白話

- **Key Refresh**：定期把碎片重新洗牌，地址、公鑰都不變
- 攻擊者必須在**同一輪 refresh 內**集滿碎片，難度暴增
- **Offline Signing**：前置回合預先算好，正式簽名一趟搞定

> 【黑色橫幅】⚠️ 但注意：服務商若握有足夠碎片，本質上還是託管（custodial）

> 【灰字註解】※ 本章不少內容出自 Fireblocks 官方資料，立場與數據請自行斟酌

> 參考：[Fireblocks: 7 Reasons Why MPC](https://www.fireblocks.com/blog/7-reasons-why-mpc-is-the-next-generation-of-private-key-security)

---

## Page 34 · Part 3 章節頁【綠底】

- PART 03
- 主標：個人 & 團隊錢包挑選指南
- 副標：UX × Feature × Safety，對號入座

---

## Page 35 · 挑錢包前，先問三個維度

| 卡片 | 說明 |
|------|------|
| UX（藍） | 上手難度、簽名流程順不順、行動端體驗好不好 |
| Feature（粉） | 多鏈支援、DeFi 串接、自動化與政策控制 |
| Safety（綠） | 金鑰管理、災難復原、供應商與單點風險 |

---

## Page 36 · 個人指南：看金額對號入座

- **日常小額** → 瀏覽器 / 行動錢包（Rabby、Rainbow、imToken）
- **中額儲蓄** → 硬體冷錢包（Ledger、Trezor、Keystone）
- **大額長期** → Safe 多簽或 MPC 服務，拒絕單點失誤歸零
- **加分題** → AA 錢包 social recovery，「弄丟助記詞」變可救

> 參考：[ethereum.org 錢包總覽](https://ethereum.org/zh-tw/wallets/find-wallet/)

---

## Page 37 · 團隊指南：透明 or 靈活，選一邊

- **小團隊 / DAO** → Safe：鏈上透明、治理友善、生態最成熟
- **機構 / 公司** → MPC 託管（Fireblocks、BitGo、Cobo）＋政策引擎
- **合規三件套** → KYC / AML / Travel Rule，讓託管商幫你扛

> 【綠色橫幅】靈魂拷問：誰握有足夠的鑰匙（或碎片），誰就是真正的託管方 🔑

> 參考：[Safe: Best Wallets for Institutions](https://safe.global/blog/the-best-crypto-wallets-for-institutions) · [Fireblocks: Custody Strategy for Banks](https://www.fireblocks.com/blog/digital-asset-custody-strategy-banks)

---

## Page 38 · Closing「帶走三件事 🎒」【黃底】

1. （藍）錢包一直在進化：從一把私鑰，走向「沒有完整私鑰」
2. （紫）Multisig 鏈上透明、MPC 鏈下靈活 — 沒有絕對贏家
3. （綠）挑錢包 = UX × Feature × Safety，看金額與團隊決定

- 結尾：Thanks! — @ryanycw · 完整研究筆記：hackmd.io/@ryanycw

---

## Page 39 · 特別感謝【粉底】

- Eyebrow：`SPECIAL THANKS`
- 主標：特別感謝 💐
- **Nic · Mason · PJ**
- 還有跟我一起 cowork 的遠距工作閒人們

--- 

加一頁：
宣傳 ETHTaipei
宣傳 AMD