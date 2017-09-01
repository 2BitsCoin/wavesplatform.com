// our products
export const GET_CLIENT_CLICK = 'GetClientClick';
export const GET_WAVES_CLICK = 'GetWavesClick';
export const ONLINE_CLIENT_CLICK = 'OnlineClientClick';
export const ANDROID_CLIENT_CLICK = 'AndroidClientClick';
export const IOS_CLIENT_CLICK = 'IosClientClick';

// developers
export const API_DOCUMENTATION_CLICK = 'DocumentationClick';
export const API_CLIENT_CLICK = 'ClientApiClick';
export const WAVES_NODE_CLICK = 'WavesNodeClick';
export const WAVES_NODE_INSTALL_CLICK = 'WavesNodeInstallClick';
export const DEX_API_CLICK = 'DexApiClick';

// files downloads
export const WHITEPAPER_DOWNLOAD = 'OwhitepaperDownload';
export const BRANDING_PACKAGE_DOWNLOAD = 'BrandingPackageDownload';

// contact
export const CONTACT_US_CLICK = 'ContactUsClick';
export const SUBMIT_RESUME_CLICK = 'SubmitResumeClick';
export const SUBSCRIBE = 'Subscribe';



const createAC = type => meta => ({ type, ...meta });


// our products
export const getClientClick = createAC(GET_CLIENT_CLICK);
export const getWavesClick = createAC(GET_WAVES_CLICK);
export const onlineClientClick = createAC(ONLINE_CLIENT_CLICK);
export const androidClientClick = createAC(ANDROID_CLIENT_CLICK);
export const iosClientClick = createAC(IOS_CLIENT_CLICK);

// developers
export const apiDocumentationClick = createAC(API_DOCUMENTATION_CLICK);
export const apiClientClick = createAC(API_CLIENT_CLICK);
export const wavesNodeClick = createAC(WAVES_NODE_CLICK);
export const wavesNodeInstallClick = createAC(WAVES_NODE_INSTALL_CLICK);
export const dexApiClick = createAC(DEX_API_CLICK);

// files downloads
export const whitepaperDownload = createAC(WHITEPAPER_DOWNLOAD);
export const brandingPackageDownload = createAC(BRANDING_PACKAGE_DOWNLOAD);

// contact
export const contactUsClick = createAC(CONTACT_US_CLICK);
export const submitResumeClick = createAC(SUBMIT_RESUME_CLICK);
export const subscribe = createAC(SUBSCRIBE);


