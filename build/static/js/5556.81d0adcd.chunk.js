"use strict";(self.webpackChunkmango=self.webpackChunkmango||[]).push([[5556],{31615:(t,e,r)=>{r.d(e,{C:()=>s});var a=r(3494),n=r(70592);class s{featureName=(()=>n.d7.name)();constructor(t){this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}setRecipient=(()=>(0,a.f)((async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]}))))()}},25556:(t,e,r)=>{r.r(e),r.d(e,{SmartContract:()=>V});var a=r(6492),n=r(36859),s=r(70592),i=r(3494),o=r(2776),c=r(73594),p=r(48987),d=r(2614),m=r(30413),h=r(83285),g=r(3404),u=r(33820),l=r(97665),f=r(72775),A=r(6090);let W=function(t){return t[t.None=0]="None",t[t.AddAdmin=1]="AddAdmin",t[t.RemoveAdmin=2]="RemoveAdmin",t}({});const y={startDate:o.gH.from(0),expirationDate:o.gH.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},w=(()=>l.z.object({startDate:a.S,expirationDate:a.E,nativeTokenLimitPerTransaction:s.cw.default(0),approvedCallTargets:l.z.union([l.z.array(s.b9),l.z.literal("*")])}))(),v=(()=>l.z.array(l.z.object({signer:s.b9,makeAdmin:l.z.boolean(),permissions:w})))(),T=[{name:"signer",type:"address"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],P=[{name:"signer",type:"address"},{name:"isAdmin",type:"uint8"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];class S{featureName=(()=>s.dm.name)();constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}hasDuplicateSigners(t){const e={},r=t.map((t=>t.signer));for(const a of r){if(e[a])return!0;e[a]=!0}return!1}parseSignerPermissionsStruct(t){return{startDate:new Date(1e3*parseInt(t.startTimestamp.toString())),expirationDate:new Date(1e3*parseInt(t.endTimestamp.toString())),nativeTokenLimitPerTransaction:o.gH.from(t.nativeTokenLimitPerTransaction),approvedCallTargets:t.approvedTargets}}async sendSignerPermissionRequest(t,e,r){const{payload:a,signature:n}=await this.generatePayload(t,e,r);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[a,n]})}async generatePayload(t,e,r){const a={signer:t,isAdmin:r.valueOf(),approvedTargets:"*"===e.approvedCallTargets?[s.cu]:e.approvedCallTargets,nativeTokenLimitPerTransaction:c.parseEther(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:o.gH.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:(0,u.L)(void 0)},n=await this.contractWrapper.getChainID(),i=this.contractWrapper.getSigner();(0,g.A)(i,"No signer available");return{payload:a,signature:await this.contractWrapper.signTypedData(i,{name:"Account",version:"1",chainId:n,verifyingContract:this.getAddress()},{SignerPermissionRequest:P},a)}}async generateLegacyPayload(t,e){if("*"===e.approvedCallTargets)throw new Error("Wildcard call targets are not supported on legacy account permissions contract, please deploy an updated contract factory.");const r={signer:t,approvedTargets:e.approvedCallTargets,nativeTokenLimitPerTransaction:c.parseEther(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:o.gH.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:(0,u.L)(void 0)},a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();(0,g.A)(n,"No signer available");return{payload:r,signature:await this.contractWrapper.signTypedData(n,{name:"Account",version:"1",chainId:a,verifyingContract:this.getAddress()},{SignerPermissionRequest:T},r)}}async isAdmin(t){const e=await(0,s.aL)(t);return await this.contractWrapper.read("isAdmin",[e])}async isSigner(t){const e=await(0,s.aL)(t);return await this.contractWrapper.read("isActiveSigner",[e])}async getAllAdmins(){return await this.contractWrapper.read("getAllAdmins",[])}async getAllSigners(){const t=await this.contractWrapper.read("getAllActiveSigners",[]);return await Promise.all(t.map((async t=>({signer:t.signer,permissions:this.parseSignerPermissionsStruct(t)}))))}async getAllAdminsAndSigners(){return[...(await this.getAllAdmins()).map((t=>({isAdmin:!0,signer:t,permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:o.gH.from(0),approvedCallTargets:[]}}))),...await this.getAllSigners()]}grantAdminPermissions=(()=>(0,i.f)((async t=>{const e=await(0,s.aL)(t);return await this.sendSignerPermissionRequest(e,y,W.AddAdmin)})))();revokeAdminPermissions=(()=>(0,i.f)((async t=>{const e=await(0,s.aL)(t);return await this.sendSignerPermissionRequest(e,y,W.RemoveAdmin)})))();grantPermissions=(()=>(0,i.f)((async(t,e)=>{const r=await(0,s.aL)(t),a=await w.parseAsync(e);return await this.sendSignerPermissionRequest(r,a,W.None)})))();updatePermissions=(()=>(0,i.f)((async(t,e)=>{const r=await(0,s.aL)(t),a=await w.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(r,a,W.None)})))();revokeAccess=(()=>(0,i.f)((async t=>{const e=await(0,s.aL)(t);return await this.sendSignerPermissionRequest(e,{startDate:o.gH.from(0),expirationDate:o.gH.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},W.None)})))();approveTargetForSigner=(()=>(0,i.f)((async(t,e)=>{const r=await(0,s.aL)(t),a=await(0,s.aL)(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(n.approvedTargets.includes(e))throw new Error("Target is already approved");const i=[...n.approvedTargets,a];return await this.sendSignerPermissionRequest(r,{startDate:o.gH.from(n.startTimestamp),expirationDate:o.gH.from(n.endTimestamp),approvedCallTargets:i,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},W.None)})))();disapproveTargetForSigner=(()=>(0,i.f)((async(t,e)=>{const r=await(0,s.aL)(t),a=await(0,s.aL)(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(!n.approvedTargets.includes(a))throw new Error("Target is currently not approved");const i=n.approvedTargets.filter((t=>p.getAddress(t)!==p.getAddress(a)));return await this.sendSignerPermissionRequest(r,{startDate:o.gH.from(n.startTimestamp),expirationDate:o.gH.from(n.endTimestamp),approvedCallTargets:i,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},W.None)})))();resetAllPermissions=(()=>(0,i.f)((async t=>{const e=await v.parseAsync(t);if(this.hasDuplicateSigners(e))throw new Error("Duplicate signers found in input.");const r=[],a=[],n=[],s=await this.getAllAdmins(),o=e.filter((t=>t.makeAdmin)).map((t=>t.signer));s.forEach((async t=>{if(!o.includes(t)){const e=(await this.sendSignerPermissionRequest(t,y,W.RemoveAdmin)).encode();r.push(e)}}));const c=await this.getAllSigners(),p=e.filter((t=>!t.makeAdmin)).map((t=>t.signer));await Promise.all(c.map((async t=>{if(!p.includes(t.signer)){const e=(await this.sendSignerPermissionRequest(t.signer,y,W.None)).encode();n.push(e)}})));for(const i of e)if(i.makeAdmin)(await this.sendSignerPermissionRequest(i.signer,y,W.AddAdmin)).encode();else{const t=(await this.sendSignerPermissionRequest(i.signer,i.permissions,W.None)).encode();a.push(t)}const d=[];return r.forEach((t=>{d.push(t)})),n.forEach((t=>{d.push(t)})),a.forEach((t=>{d.push(t)})),i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[d]})})))()}class x{featureName=(()=>s.dn.name)();constructor(t){this.contractWrapper=t,this.accountPermissions=this.detectAccountPermissions()}detectAccountPermissions(){if((0,n.d)(this.contractWrapper,"AccountPermissions")||(0,n.d)(this.contractWrapper,"AccountPermissionsV1"))return new S(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async isAdmin(t){return(0,a.a)(this.accountPermissions,s.dm).isAdmin(t)}async isSigner(t){return(0,a.a)(this.accountPermissions,s.dm).isSigner(t)}async getAllAdmins(){return(0,a.a)(this.accountPermissions,s.dm).getAllAdmins()}async getAllSigners(){return(0,a.a)(this.accountPermissions,s.dm).getAllSigners()}async getAllAdminsAndSigners(){return(0,a.a)(this.accountPermissions,s.dm).getAllAdminsAndSigners()}grantAdminPermissions=(()=>(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dm).grantAdminPermissions.prepare(t))))();revokeAdminPermissions=(()=>(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dm).revokeAdminPermissions.prepare(t))))();grantPermissions=(()=>(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dm).grantPermissions.prepare(t,e))))();updatePermissions=(()=>(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dm).updatePermissions.prepare(t,e))))();revokeAccess=(()=>(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dm).revokeAccess.prepare(t))))();approveTargetForSigner=(()=>(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dm).approveTargetForSigner.prepare(t,e))))();disapproveTargetForSigner=(()=>(0,i.f)((async(t,e)=>(0,a.a)(this.accountPermissions,s.dm).disapproveTargetForSigner.prepare(t,e))))();resetAllPermissions=(()=>(0,i.f)((async t=>(0,a.a)(this.accountPermissions,s.dm).resetAllPermissions.prepare(t))))()}class b{featureName=(()=>s.dp.name)();constructor(t){this.contractWrapper=t,this.events=new n.a(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async predictAccountAddress(t,e){let r=d.YW("");return e&&(r=e),this.contractWrapper.read("getAddress",[t,r])}async getAssociatedAccounts(t){return this.contractWrapper.read("getAccountsOfSigner",[t])}async getAllAccounts(){return await this.contractWrapper.read("getAllAccounts",[])}async isAccountDeployed(t,e){const r=await this.predictAccountAddress(t,e);return(0,s.au)(r,this.contractWrapper.getProvider())}createAccount=(()=>(0,i.f)((async(t,e)=>{if(await this.isAccountDeployed(t,e))throw new Error(`Account already deployed for admin: ${t}`);let r=d.YW("");return e&&(r=e),i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAccount",args:[t,r],parse:t=>({address:this.contractWrapper.parseLogs("AccountCreated",t?.logs)[0].args.account,receipt:t})})})))()}class E{constructor(t,e){this.contractWrapper=t,this.storage=e}async get(){return this._cachedMetadata||(this._cachedMetadata=await(0,s.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)),this._cachedMetadata}async extractSources(){const t=await this.get();return(0,f.f)(t,this.storage)}async extractFunctions(){let t;try{t=await this.get()}catch(e){}return(0,s.a2)(s.bj.parse(this.contractWrapper.abi),t?.metadata)}async extractEvents(){let t;try{t=await this.get()}catch(e){}return function(t,e){const r=s.bj.parse(t||[]).filter((t=>"event"===t.type)),a=[];for(const n of r){const t=(0,s.a0)(n.name,e,"events");a.push({inputs:n.inputs||[],outputs:n.outputs||[],name:n.name||"unknown",comment:t})}return a}(s.bj.parse(this.contractWrapper.abi),t?.metadata)}}class C{featureName=(()=>s.dq.name)();constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.readContract.address}async getAll(){return await this.contractWrapper.readContract.getAllExtensions()}async get(t){return await this.contractWrapper.readContract.getExtension(t)}async getExtensionAddress(t){return(await this.get(t)).metadata.implementation}async getAllFunctions(t){return(await this.get(t)).functions}async getExtensionForFunction(t){let e=t.functionSelector;e||((0,g.A)(t.functionSignature,"Atleast one of function selector and signature must be provided"),e=m.id(t.functionSignature).substring(0,10));return await this.contractWrapper.readContract.getMetadataForFunction(e)}async getExtensionAddressForFunction(t){return(await this.getExtensionForFunction(t)).implementation}add=(()=>(0,i.f)((async t=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionAdded",e.logs).length<1)throw new Error("No ExtensionAdded event found");const r=t.extensionAbi?s.bj.parse(t.extensionAbi):(await(0,s.K)(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForAdd(r,t.extension),n=(0,s.aj)([s.bj.parse(this.contractWrapper.abi),a]);return this.contractWrapper.updateAbi(n),e}}))))();addDeployed=(()=>(0,i.f)((async t=>{let e=t.extensionAbi;if(!e){e=(await(0,s.K)(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi}(0,g.A)(e,"Require extension ABI");let r="";if(t.extensionMetadata)if("string"===typeof t.extensionMetadata)r=t.extensionMetadata;else{const e=await s.bD.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(e)}const a=(0,A.b)(s.bj.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.add.prepare({extension:n,extensionAbi:e})})))();addPublished=(()=>(0,i.f)((async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||s.aH,e);return this.addDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})})))();replace=(()=>(0,i.f)((async t=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"replaceExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionReplaced",e.logs).length<1)throw new Error("No ExtensionReplaced event found");const r=t.extensionAbi?s.bj.parse(t.extensionAbi):(await(0,s.K)(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForRemove(s.bj.parse(this.contractWrapper.abi),r),n=this.filterAbiForAdd(r,t.extension),i=(0,s.aj)([a,n]);return this.contractWrapper.updateAbi(i),e}}))))();replaceDeployed=(()=>(0,i.f)((async t=>{let e=t.extensionAbi;if(!e){e=(await(0,s.K)(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi}(0,g.A)(e,"Require extension ABI");let r="";if(t.extensionMetadata)if("string"===typeof t.extensionMetadata)r=t.extensionMetadata;else{const e=await s.bD.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(e)}const a=(0,A.b)(s.bj.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.replace.prepare({extension:n,extensionAbi:e})})))();replacePublished=(()=>(0,i.f)((async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||s.aH,e);return this.replaceDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})})))();remove=(()=>(0,i.f)((async t=>{const e=await this.getExtensionAddress(t.extensionName);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"removeExtension",args:[t.extensionName],parse:async t=>{if(this.contractWrapper.parseLogs("ExtensionRemoved",t.logs).length<1)throw new Error("No ExtensionRemoved event found");const r=(await(0,s.K)(e,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,a=this.filterAbiForRemove(s.bj.parse(this.contractWrapper.abi),r);return this.contractWrapper.updateAbi(a),t}})})))();filterAbiForAdd(t,e){const r=new h.KA(t),a=e.functions.map((t=>t.functionSelector));return t.filter((t=>{const e=Object.values(new h.KA([t]).functions);if(0===e.length)return!1;const n=r.getSighash(e[0]);return a.includes(n)}))}filterAbiForRemove(t,e){const r=new h.KA(t),a=new h.KA(e),n=Object.values(a.functions).map((t=>a.getSighash(t)));return t.filter((t=>{const e=Object.values(new h.KA([t]).functions);if(0===e.length)return!1;const a=r.getSighash(e[0]);return!n.includes(a)}))}async deployExtension(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"latest";const a=await(0,s.aI)(e,t,r,this.contractWrapper.storage,this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),n=await(0,A.g)(a.metadataUri,this.contractWrapper.storage,this.contractWrapper.getProvider(),"",this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),i=n.find((t=>"implementation"===t.type))?.transaction.predictedAddress,o=n.filter((t=>t.transaction.data&&t.transaction.data.length>0)),c=o.filter((t=>"infra"!==t.type)).map((t=>t.transaction)),p=o.filter((t=>"infra"===t.type)).map((t=>t.transaction)),d=this.contractWrapper.getSigner();(0,g.A)(d,"Signer is required"),await(0,A.a)(d,p,{});for(const s of c)try{await(0,A.d)(d,s)}catch(m){console.debug(`Error deploying contract at ${s.predictedAddress}`,m?.message)}return{deployedExtensionAddress:i,extensionMetadata:a.metadataUri}}}class D{featureName=(()=>s.dr.name)();constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(()=>(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC20",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,amount:t.args.amount.toString()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}}))))()}class R{featureName=(()=>s.ds.name)();constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(()=>(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC721",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,tokenId:t.args.tokenId.toNumber()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}}))))()}class L{featureName=(()=>s.dt.name)();constructor(t){this.contractWrapper=t}getAddress(){return this.contractWrapper.address}drop=(()=>(0,i.f)((async(t,e,r)=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC1155",args:[t,e,r],parse:t=>{const e=this.contractWrapper.parseLogs("AirdropFailed",t.logs).map((t=>({recipient:t.args.recipient,tokenId:t.args.tokenId.toNumber(),amount:t.args.amount.toString()})));return{successfulDropCount:r.length-e.length,failedDropCount:e.length,failedDrops:e}}}))))()}var k=r(33409),F=r(78527),N=r(74825),q=r(48394),I=r(90755),M=r(31615),j=r(10711),H=r(87151),K=r(84058),O=r(96137);r(6373),r(40462),r(92377),r(122);class V{get abi(){return s.bj.parse(this.contractWrapper.abi||[])}get royalties(){return(0,a.a)(this.detectRoyalties(),s.d5)}get roles(){return(0,a.a)(this.detectRoles(),s.d4)}get sales(){return(0,a.a)(this.detectPrimarySales(),s.d7)}get platformFees(){return(0,a.a)(this.detectPlatformFees(),s.du)}get owner(){return(0,a.a)(this.detectOwnable(),s.d6)}get erc20(){return(0,a.a)(this.detectErc20(),s.cI)}get erc721(){return(0,a.a)(this.detectErc721(),s.c$)}get erc1155(){return(0,a.a)(this.detectErc1155(),s.dj)}get app(){return(0,a.a)(this.detectApp(),s.cK)}get directListings(){return(0,a.a)(this.detectDirectListings(),s.dA)}get englishAuctions(){return(0,a.a)(this.detectEnglishAuctions(),s.dB)}get offers(){return(0,a.a)(this.detectOffers(),s.dC)}get airdrop20(){return(0,a.a)(this.detectAirdrop20(),s.dr)}get airdrop721(){return(0,a.a)(this.detectAirdrop721(),s.ds)}get airdrop1155(){return(0,a.a)(this.detectAirdrop1155(),s.dt)}get accountFactory(){return(0,a.a)(this.detectAccountFactory(),s.dp)}get account(){return(0,a.a)(this.detectAccount(),s.dn)}get extensions(){return(0,a.a)(this.detectBaseRouter(),s.dq)}get chainId(){return this._chainId}constructor(t,e,r,a){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cs(t,e,r,i,a);this._chainId=o,this.storage=a,this.contractWrapper=c,this.events=new n.a(this.contractWrapper),this.encoder=new k.C(this.contractWrapper),this.interceptor=new F.C(this.contractWrapper),this.estimator=new n.G(this.contractWrapper),this.publishedMetadata=new E(this.contractWrapper,this.storage),this.metadata=new n.C(this.contractWrapper,s.bg,this.storage)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}prepare(t,e,r){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectRoyalties(){if((0,n.d)(this.contractWrapper,"Royalty")){const t=new n.C(this.contractWrapper,s.bg,this.storage);return new N.C(this.contractWrapper,t)}}detectRoles(){if((0,n.d)(this.contractWrapper,"Permissions"))return new I.C(this.contractWrapper,s.G)}detectPrimarySales(){if((0,n.d)(this.contractWrapper,"PrimarySale"))return new M.C(this.contractWrapper)}detectPlatformFees(){if((0,n.d)(this.contractWrapper,"PlatformFee"))return new q.C(this.contractWrapper)}detectErc20(){if((0,n.d)(this.contractWrapper,"ERC20"))return new H.E(this.contractWrapper,this.storage,this.chainId)}detectErc721(){if((0,n.d)(this.contractWrapper,"ERC721"))return new K.E(this.contractWrapper,this.storage,this.chainId)}detectErc1155(){if((0,n.d)(this.contractWrapper,"ERC1155"))return new j.E(this.contractWrapper,this.storage,this.chainId)}detectOwnable(){if((0,n.d)(this.contractWrapper,"Ownable"))return new N.a(this.contractWrapper)}detectApp(){const t=new n.C(this.contractWrapper,s.bg,this.storage);return(0,n.d)(this.contractWrapper,"AppURI")||(0,n.d)(this.contractWrapper,"ContractMetadata")?new n.b(this.contractWrapper,t,this.storage):void 0}detectDirectListings(){if((0,n.d)(this.contractWrapper,"DirectListings"))return new O.M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,n.d)(this.contractWrapper,"EnglishAuctions"))return new O.a(this.contractWrapper,this.storage)}detectOffers(){if((0,n.d)(this.contractWrapper,"Offers"))return new O.b(this.contractWrapper,this.storage)}detectBaseRouter(){if((0,n.d)(this.contractWrapper,s.dq.name))return new C(this.contractWrapper)}detectAirdrop20(){if((0,n.d)(this.contractWrapper,"AirdropERC20"))return new D(this.contractWrapper)}detectAirdrop721(){if((0,n.d)(this.contractWrapper,"AirdropERC721"))return new R(this.contractWrapper)}detectAirdrop1155(){if((0,n.d)(this.contractWrapper,"AirdropERC1155"))return new L(this.contractWrapper)}detectAccountFactory(){if((0,n.d)(this.contractWrapper,s.dp.name))return new b(this.contractWrapper)}detectAccount(){if((0,n.d)(this.contractWrapper,s.dn.name))return new x(this.contractWrapper)}}}}]);
//# sourceMappingURL=5556.81d0adcd.chunk.js.map