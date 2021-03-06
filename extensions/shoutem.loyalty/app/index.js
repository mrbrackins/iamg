import PointsCardScreen from './screens/PointsCardScreen';
import PointsSmallCardScreen from './screens/PointsSmallCardScreen';
import PunchCardListScreen from './screens/PunchCardListScreen';
import StampCardScreen from './screens/StampCardScreen';
import PinVerificationScreen from './screens/PinVerificationScreen';
import VerificationScreen from './screens/VerificationScreen';
import AssignPointsScreen from './screens/AssignPointsScreen';
import PointsEarnedScreen from './screens/PointsEarnedScreen';
import RedeemOrContinueScreen from './screens/RedeemOrContinueScreen';
import TransactionProcessedScreen from './screens/TransactionProcessedScreen';
import RewardsListScreen from './screens/RewardsListScreen';
import RewardsProgressScreen from './screens/RewardsProgressScreen';
import RewardDetailsScreen from './screens/RewardDetailsScreen';
import PointsHistoryScreen from './screens/PointsHistoryScreen';
import NoProgramScreen from './screens/NoProgramScreen';
import FavoritesListScreen from './screens/FavoritesListScreen';

import { PlacesListScreen } from './screens/places';

import PlaceDetails from './screens/places/PlaceDetails';
import GaugeRewardsPlaceDetails from './screens/places/GaugeRewardsPlaceDetails';
import LargeImageGaugeRewardsPlaceDetails from './screens/places/LargeImageGaugeRewardsPlaceDetails';
import NoImageGaugeRewardsPlaceDetails from './screens/places/NoImageGaugeRewardsPlaceDetails';
import SinglePlaceMap from './screens/places/SinglePlaceMap';

import enTranslations from './translations/en.json';

import './navigation';

import reducer from './redux';

export { reducer };

export const screens = {
  PointsCardScreen,
  PointsSmallCardScreen,
  PunchCardListScreen,
  StampCardScreen,
  PinVerificationScreen,
  AssignPointsScreen,
  PointsEarnedScreen,
  RedeemOrContinueScreen,
  RewardsListScreen,
  RewardsProgressScreen,
  RewardDetailsScreen,
  TransactionProcessedScreen,
  PointsHistoryScreen,
  PlacesListScreen,
  PlaceDetails,
  GaugeRewardsPlaceDetails,
  LargeImageGaugeRewardsPlaceDetails,
  NoImageGaugeRewardsPlaceDetails,
  SinglePlaceMap,
  NoProgramScreen,
  FavoritesListScreen,
  VerificationScreen,
};

export const shoutem = {
  i18n: {
    translations: {
      en: enTranslations,
    },
  },
};

export { refreshCard, refreshCardState } from './services';

export { CARD_SCHEMA } from './const';

export { appDidMount } from './app';
