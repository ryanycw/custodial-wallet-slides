# 2026 錢包大盤點 — 內容稿

> 這份文件對應 `slides/wallet-landscape-2026/index.tsx` 的逐頁內容。
> 直接編輯這裡的文字，再請 Claude 同步回 slide 即可。
> 標記說明：【底色】= 該頁或色塊的背景色；**粗體** = 頁面上的彩色強調字。

---

## Page 1 · Cover【黃底】

- Eyebrow：`@RYANYCW · 2026`
- 主標：**2026 錢包大盤點**
- 副標：Wallet Landscape in 2026 — 從一把私鑰，到沒有完整私鑰
- 三顆膠囊：`錢包進化史`（藍）｜`MULTISIG vs. MPC`（紫）｜`挑選指南`（綠）

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

---

## Page 5 · 百花齊放：日常錢包四大流派

| 卡片 | 內容 |
|------|------|
| 🧩 瀏覽器擴充（藍） | MetaMask · Rabby · Phantom · Rainbow · Trust |
| 🧊 硬體冷錢包（紫） | Ledger · Trezor · OneKey · Keystone · imKey |
| 📱 行動優先新勢力（粉） | Fluidkey · Peanut · Payy |
| 🏦 交易所錢包（綠） | Coinbase · Binance · OKX · Bybit · Bitget |

---

## Page 6 · 新物種：AA 與 Agentic 錢包

**帳戶抽象 AA（藍卡）**
- EIP-4337 / 3074 / 7702：免助記詞、gas 代付、social recovery
- 玩家：Privy · Dynamic · ZeroDev

**Agentic 錢包（粉卡）**
- 讓 AI agent 自己持有錢包、自動簽名與付款
- 玩家：Circle · Coinbase · Cloudflare · MetaMask

> 【底部備註】而多簽老大哥 **Safe**（前 Gnosis Safe）依然是個人與機構的金庫標配 → 下一章詳談

---

## Page 7 · 支線任務：機構託管進化史（時間軸・逐步顯示）

| 年份 | 事件 | 說明 |
|------|------|------|
| 2010（黑） | Mt. Gox | 交易所託管元年（也是慘案元年） |
| 2013（藍） | BitGo | 機構級 Multisig 2-of-3 開山祖師 |
| 2018（紫） | Coinbase Custody | 合規機構託管正式上線 |
| 現在（綠） | Fireblocks 等 | MPC 成為機構標配（Anchorage · Cobo · Fidelity） |

---

## Page 8 · Part 2 章節頁【紫底】

- PART 02
- 主標：Multisig vs. MPC 白話文
- 副標：兩種「不要把雞蛋放同一把鑰匙」的哲學

---

## Page 9 · Multisig：多把鑰匙開一個保險箱

> 【紫色橫幅】「保險箱配 N 把鑰匙，開箱要同時湊滿 M 把」

- 每把私鑰**獨立簽名**，鏈上合約驗證門檻（2-of-3、3-of-5）
- 代表：**Safe**（EVM 標配）、**BitGo 2-of-3**（機構鼻祖）
- 鏈上**看得一清二楚**：門檻、簽名者、每次改組（P2SH / P2WSH）

---

## Page 10 · MPC：一把鑰匙磨成碎片

> 【粉色橫幅】「完整私鑰，從頭到尾都沒存在過」

- 私鑰以 **key share 碎片**分散在多方裝置與雲端 TEE
- 簽名是一場**鏈下多方運算**：湊門檻，但不拼回私鑰
- 鏈上看起來就是**普通單簽交易**，門檻大小外人看不出
- 代表：**Fireblocks MPC-CMP**、**Coinbase Custody**

---

## Page 11 · 正面對決：Multisig vs. MPC（左右兩欄・逐步顯示）

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

---

## Page 12 · MPC 加分題：還是講白話

- **Key Refresh**：定期把碎片重新洗牌，地址、公鑰都不變
- 攻擊者必須在**同一輪 refresh 內**集滿碎片，難度暴增
- **Offline Signing**：前置回合預先算好，正式簽名一趟搞定

> 【黑色橫幅】⚠️ 但注意：服務商若握有足夠碎片，本質上還是託管（custodial）

---

## Page 13 · Part 3 章節頁【綠底】

- PART 03
- 主標：個人 & 團隊錢包挑選指南
- 副標：UX × Feature × Safety，對號入座

---

## Page 14 · 挑錢包前，先問三個維度

| 卡片 | 說明 |
|------|------|
| UX（藍） | 上手難度、簽名流程順不順、行動端體驗好不好 |
| Feature（粉） | 多鏈支援、DeFi 串接、自動化與政策控制 |
| Safety（綠） | 金鑰管理、災難復原、供應商與單點風險 |

---

## Page 15 · 個人指南：看金額對號入座

- **日常小額** → 瀏覽器 / 行動錢包（Rabby、Rainbow、imToken）
- **中額儲蓄** → 硬體冷錢包（Ledger、Trezor、Keystone）
- **大額長期** → Safe 多簽或 MPC 服務，拒絕單點失誤歸零
- **加分題** → AA 錢包 social recovery，「弄丟助記詞」變可救

---

## Page 16 · 團隊指南：透明 or 靈活，選一邊

- **小團隊 / DAO** → Safe：鏈上透明、治理友善、生態最成熟
- **機構 / 公司** → MPC 託管（Fireblocks、BitGo、Cobo）＋政策引擎
- **合規三件套** → KYC / AML / Travel Rule，讓託管商幫你扛

> 【綠色橫幅】靈魂拷問：誰握有足夠的鑰匙（或碎片），誰就是真正的託管方 🔑

---

## Page 17 · Closing「帶走三件事 🎒」【黃底】

1. （藍）錢包一直在進化：從一把私鑰，走向「沒有完整私鑰」
2. （紫）Multisig 鏈上透明、MPC 鏈下靈活 — 沒有絕對贏家
3. （綠）挑錢包 = UX × Feature × Safety，看金額與團隊決定

- 結尾：Thanks! — @ryanycw · 完整研究筆記：hackmd.io/@ryanycw
