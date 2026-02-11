import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { BagItems } from './pages/bag-items/bag-items';
import { SubItems } from './pages/sub-items/sub-items';
import { Login } from './login/login';
import { ImgUpload } from './img-upload/img-upload';
import { AboutSubsection } from './about-subsection/about-subsection';
import { AboutUs } from './about-us/about-us';
import { TrustAndSaftey } from './trust-and-saftey/trust-and-saftey';
import { Accessibility } from './accessibility/accessibility';
import { PrivacyCenter } from './privacy-center/privacy-center';
import { BagsPage } from './pages/bags-page/bags-page';
import { LoginForm } from './login-form/login-form';
import { SignupForm } from './signup-form/signup-form';
import { Inbox } from './inbox/inbox';
import { FavList } from './fav-list/fav-list';
import { Profile } from './profile/profile';
import { Invite } from './invite/invite';
import { Referrals } from './referrals/referrals';
import { Settings } from './settings/settings';
import { Wallet } from './wallet/wallet';
import { Personalization } from './personalization/personalization';
import { MyOrders } from './my-orders/my-orders';
import { Donations } from './donations/donations';
import { HelpCenter } from './help-center/help-center';
import { AccountSettings } from './account-settings/account-settings';
import { ProfileDetails } from './profile-details/profile-details';
import { Shipping } from './shipping/shipping';
import { Payments } from './payments/payments';
import { BundleDiscounts } from './bundle-discounts/bundle-discounts';
import { Notifications } from './notifications/notifications';
import { PrivacySettings } from './privacy-settings/privacy-settings';
import { Security } from './security/security';
import { BankDetail } from './bank-detail/bank-detail';
import { Username } from './username/username';
import { Change } from './change/change';
import { VerifyNo } from './verify-no/verify-no';
import { PasswordChange } from './password-change/password-change';
import { DeleteAccount } from './delete-account/delete-account';
import { LoginActivity } from './login-activity/login-activity';
import { MobileApps } from './mobile-apps/mobile-apps';
import { Advertising } from './advertising/advertising';
import { Sustainability } from './sustainability/sustainability';
import { Press } from './press/press';
import { Newsroom } from './newsroom/newsroom';
import { MediaAssets } from './media-assets/media-assets';
import { VintedVentures } from './vinted-ventures/vinted-ventures';
import { InfoModal } from './info-modal/info-modal';
import { Infoboard } from './infoboard/infoboard';
import { HelpHome } from './help-home/help-home';
import { Selling } from './selling/selling';
import { SellingBasics } from './selling-basics/selling-basics';
import { UploadingListing } from './uploading-listing/uploading-listing';
import { ManagingListing } from './managing-listing/managing-listing';
import { Withdrawals } from './withdrawals/withdrawals';
import { ShippingReturns } from './shipping-returns/shipping-returns';
import { HiddenListing } from './hidden-listing/hidden-listing';
import { VintedPro } from './vinted-pro/vinted-pro';
import { Buying } from './buying/buying';
import { FindingItems } from './finding-items/finding-items';
import { GettingItems } from './getting-items/getting-items';
import { Refunds } from './refunds/refunds';
import { Returns } from './returns/returns';
import { Account } from './account/account';
import { ProfileSettings } from './profile-settings/profile-settings';
import { IdVerfications } from './id-verfications/id-verfications';
import { BannedAcc } from './banned-acc/banned-acc';
import { Reporting } from './reporting/reporting';
import { DataPrivacy } from './data-privacy/data-privacy';
import { Regestration } from './regestration/regestration';
import { ReferralsDonations } from './referrals-donations/referrals-donations';
import { Policies } from './policies/policies';
import { BuyingBasics } from './buying-basics/buying-basics';
import { Feedback } from './feedback/feedback';
export const routes: Routes = [

  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'items', component: BagItems },
      { path: 'about-subsection', component: AboutSubsection },
      { path: 'about-us', component: AboutUs },
      { path: 'trust&safety', component: TrustAndSaftey },
      { path: 'accessibility', component: Accessibility },
      { path: 'privacy-center', component: PrivacyCenter },
      { path: 'bags-page', component: BagsPage },
      { path: 'login-form', component: LoginForm },
      { path: 'signup-form', component: SignupForm },
      { path: 'inbox', component: Inbox },
      { path: 'favlist', component: FavList },
      { path: 'profile', component: Profile },
      { path: 'invite', component: Invite },
      { path: 'referrals', component: Referrals },
      { path: 'mobile-apps', component: MobileApps },
      { path: 'advertising', component: Advertising },
      { path: 'infoboard', component: Infoboard },


      {
        path: '', component: Settings,
        children: [
          { path: 'settings/profile', component: ProfileDetails },
          { path: 'settings/accountsettings', component: AccountSettings },
          { path: 'settings/shipping', component: Shipping },
          { path: 'settings/payments', component: Payments },
          { path: 'settings/bundle-discounts', component: BundleDiscounts },
          { path: 'settings/notifications', component: Notifications },
          { path: 'settings/privacy-settings', component: PrivacySettings },
          { path: 'settings/security', component: Security },
          { path: 'settings/username', component: Username },
          { path: 'delete-account', component: DeleteAccount },
          { path: 'login-activity', component: LoginActivity },

        ]
      },
      { path: 'wallet', component: Wallet },
      { path: 'personalization', component: Personalization },
      { path: 'my-orders', component: MyOrders },
      { path: 'donations', component: Donations },
      {
         path: '', component: HelpCenter,
        children:[
          { path: 'help-home', component: HelpHome},
          { path: 'selling', component: Selling},
          { path: 'basics', component: SellingBasics},
          { path: 'buying-basics', component: BuyingBasics},
           { path: 'feedback', component:Feedback},
          { path: 'uploading-listing', component: UploadingListing},
          { path: 'managing-listing', component: ManagingListing},
          { path: 'hidden-listing', component: HiddenListing},
          { path: 'shipping-returns', component: ShippingReturns},
          { path: 'withdrawals', component: Withdrawals},
          { path: 'vinted-pro', component:VintedPro},
          { path: 'buying', component:Buying},
          { path: 'finding-items', component:FindingItems},
          { path: 'getting-items', component:GettingItems},
          { path: 'refunds', component:Refunds},
          { path: 'returns', component:Returns},
          { path: 'account', component:Account},
          { path: 'profile-settings', component:ProfileSettings},
          { path: 'id-verfications', component:IdVerfications},
          { path: 'banned-acc', component:BannedAcc},
          { path: 'reporting', component:Reporting},
          { path: 'data-privacy', component:DataPrivacy},
          { path: 'registration', component:Regestration},
          { path: 'referrals-and-donations', component:ReferralsDonations},
          { path: 'policies', component:Policies},
        ]

       },
      { path: 'change', component: Change },
      { path: 'verify-no', component: VerifyNo },
      { path: 'password-change', component: PasswordChange },

    ],
  },
  { path: 'bank-deatil', component: BankDetail },
  
  { 
    path: '', component: Press ,
   children: [
    { path: 'newsroom', component: Newsroom },
    { path: 'sustainability', component: Sustainability },
    { path: 'media-assets', component: MediaAssets },
    { path: 'vinted-ventures', component: VintedVentures },


  ]
}

];

