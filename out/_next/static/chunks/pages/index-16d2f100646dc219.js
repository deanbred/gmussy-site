(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(51692)}])},96301:function(e,t,n){"use strict";let a=n(63021),s=n(62613),i=n(37917);e.exports={abi:a,abiToken:s,contractAddresses:i}},51692:function(e,t,n){"use strict";let a,s,i;n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),l=n(9008),o=n.n(l),p=n(25675),u=n.n(p),d=n(97621);function c(){return(0,r.jsxs)("nav",{className:"p-3 z-10 flex flex-row justify-center sticky top-0  bg-gradient-to-r from-[#b8a57e] to-[#7a6b54] border-b-2 overflow-hidden",children:[(0,r.jsx)("div",{className:"mr-auto",children:(0,r.jsx)(u(),{src:"logo-00.jpg",width:72,height:72,alt:"Logo"})}),(0,r.jsx)("div",{className:"px-3 text-[#a43d2b] lg:text-5xl md:text-3xl sm:text-xl font-semibold mr-auto",children:"MEV Resistant ERC20 Token"}),(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsx)(d.cg,{})})]})}var y=n(96301),m=n(83078),f=n(67294),b=n(25009);function x(){let{Moralis:e,isWeb3Enabled:t,chainId:n,account:l}=(0,m.Nr)();i=parseInt(n),console.log("chain is ".concat(i)),console.log("account is ".concat(l));let o=i in y.contractAddresses?y.contractAddresses[i][0]:null;console.log("raffle address is ".concat(o));let[p,u]=(0,f.useState)("0"),[c,x]=(0,f.useState)("0"),[h,w]=(0,f.useState)("0"),[T,g]=(0,f.useState)("0"),[j,v]=(0,f.useState)("0"),N=(0,d.aa)(),{runContractFunction:k,data:M,isLoading:E,isFetching:C}=(0,m.JX)({abi:y.abi,contractAddress:o,functionName:"enterRaffle",msgValue:p,params:{}}),{runContractFunction:_}=(0,m.JX)({abi:y.abiToken,contractAddress:"0x8b88f72997f10c26CdeB500Fc6612C570a6a0A31",functionName:"balanceOf",params:{}}),{runContractFunction:R}=(0,m.JX)({abi:y.abi,contractAddress:o,functionName:"getEntranceFee",params:{}}),{runContractFunction:A}=(0,m.JX)({abi:y.abi,contractAddress:o,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:S}=(0,m.JX)({abi:y.abi,contractAddress:o,functionName:"getRecentWinner",params:{}}),{runContractFunction:O}=(0,m.JX)({abi:y.abi,contractAddress:o,functionName:"getRaffleState",params:{}});async function F(){let e=(await R()).toString(),t=(await A()).toString(),n=await S(),i=await O();0==i?a="Open":1==i&&(a="Closed"),g(i),v(s=t*e/1e18),u(e),x(t),w(n),g(i)}(0,f.useEffect)(()=>{t&&F()},[t]);let V=()=>{N({type:"success",message:"Transaction Complete!",title:"Transaction Notification",position:"topR"})},W=async e=>{try{await e.wait(1),F(),V(e)}catch(e){console.log(e)}};return(0,r.jsxs)("div",{className:"float-left font-semibold",children:[o?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("button",{className:"p-2 bg-[#a43d2b] text-stone-200 font-bold rounded-2xl",onClick:async()=>await k({onSuccess:W,onError:e=>console.log(e)}),disabled:E||C,children:E||C?(0,r.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Lottery"}),(0,r.jsxs)("div",{className:"p-2 mt-2 bg-stone-200 opacity-90 lg:text-base md:text-sm sm:text-sm text-xs rounded-2xl",children:[(0,r.jsxs)("p",{children:["Players: ",c]}),(0,r.jsxs)("p",{children:["Jackpot: ",s," ETH"]}),(0,r.jsxs)("p",{children:["Entrance: ",b.bM(p,"ether")," ETH"]}),(0,r.jsxs)("p",{children:["Current State: ",a]})]})]})}):(0,r.jsx)("div",{children:"Connect to Ethereum Mainnet"})," "]})}var h=n(99121);function w(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Anti-MEV Token"}),(0,r.jsx)("meta",{name:"description",content:"Crypto Token Website"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/logo-00.jpg"})]}),(0,r.jsx)(c,{}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover md:bg-center bg-[url('../public/bg-01.jpeg')]",children:[(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)(x,{className:""}),(0,r.jsx)("button",{className:"p-2 float-right bg-[#a43d2b] text-stone-200 font-bold rounded-2xl",onClick:async()=>window.open("https://app.uniswap.org/"),children:"Buy on Uniswap"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"p-3 m-3 bg-stone-200 opacity-90  md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsx)("p",{className:"",children:"Malicious bots steal millions from crypto users by bribing miners to either front-run or sandwich their transactions"}),(0,r.jsxs)("p",{className:"",children:['This "invisible tax" is now known as'," ",(0,r.jsx)("a",{href:"https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/",className:"text-sky-800 hover:text-sky-600 text-base font-semibold leading-7",children:"Maximal Extractable Value (MEV)"})]}),(0,r.jsx)("p",{className:"",children:"These shady actors pollute this industry and make it harder for legitimate traders to make it"}),(0,r.jsx)("p",{className:"",children:"Our code was developed to protect users from these losses, and deliver more of their trading profits"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-4",children:[(0,r.jsx)(h.QZ,{url:"https://t.me",network:"telegram",fgColor:"white"}),(0,r.jsx)(h.QZ,{url:"https://twitter.com/Anti_MEV",network:"twitter",fgColor:"white"}),(0,r.jsx)(h.QZ,{url:"https://discord.gg/nab3H9cyZQ",network:"discord",fgColor:"white"})]}),(0,r.jsxs)("div",{className:"p-3 m-3 mt-10 bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsxs)("ul",{className:"space-y-4",children:[(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Fights sandwich attacks by requiring blocks to be mined between 2 transfers from the same wallet"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Uses UniswapV3 sequencing tools to further defend against front-running"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Max Wallet size of 3% of supply limits price manipulation by a single whale"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Excludes a carefully curated list of known attack bots"})]})]}),(0,r.jsxs)("div",{className:"ml-12 mt-2 text-base font-semibold",children:[(0,r.jsx)("p",{children:"Want to dig deeper into Anti-MEV?"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://github.com/deanbred/Anti-MEV-Token.git",className:"text-sky-800 hover:text-sky-600",children:"Read the code →"})})]})]}),(0,r.jsx)("div",{className:"mb-2 flex flex-row items-center justify-center",children:(0,r.jsx)(u(),{src:"chainlink_badge.jpeg",width:175,height:64,alt:"Logo"})})]})]}),(0,r.jsx)("footer",{className:"text-[7px]",children:"dev actually based 1KEOY"})]})}n(73935)},63021:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"vrfCoordinatorV2","type":"address"},{"internalType":"uint64","name":"subscriptionId","type":"uint64"},{"internalType":"bytes32","name":"gasLane","type":"bytes32"},{"internalType":"uint256","name":"interval","type":"uint256"},{"internalType":"uint256","name":"entranceFee","type":"uint256"},{"internalType":"uint32","name":"callbackGasLimit","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"name":"OnlyCoordinatorCanFulfill","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"RaffleEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"requestId","type":"uint256"}],"name":"RequestedRaffleWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"WinnerPicked","type":"event"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterRaffle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getEntranceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumWords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPlayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRaffleState","outputs":[{"internalType":"enum Raffle.RaffleState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRequestConfirmations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},62613:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"},{"internalType":"uint256","name":"_maxWallet","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockDelay","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bots","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_address","type":"address[]"},{"internalType":"bool[]","name":"_isBot","type":"bool[]"}],"name":"setBots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_maxWallet","type":"uint256"},{"internalType":"uint16","name":"_blockDelay","type":"uint16"},{"internalType":"contract ISwapRouter","name":"_swapRouter","type":"address"}],"name":"setVars","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"5":["0x877Ea63d40B1A653FAe54577fd371044a840f4e9"],"31337":["0x687bB6c57915aa2529EfC7D2a26668855e022fAE"],"11155111":["0x912a47f8247c32917138972022A80410719E7640"]}')}},function(e){e.O(0,[343,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);