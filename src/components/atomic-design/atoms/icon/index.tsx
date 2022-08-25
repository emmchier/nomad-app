import React, { FC } from 'react';

import {
  ActivitiesIcon,
  AddIcon,
  ArrowTopIcon,
  BarIcon,
  BathIcon,
  BedIcon,
  BrandLogo,
  BurgerIcon,
  CalendarIcon,
  CheckIcon,
  ChevronIcon,
  ClockIcon,
  CloseIcon,
  CoffeeIcon,
  ConocenosIcon,
  CoworkingIcon,
  EmailIcon,
  ExploreIcon,
  FacebookIcon,
  GastroIcon,
  HotelIcon,
  IncreibleIcon,
  InstagramIcon,
  LampIcon,
  LanguageIcon,
  LessIcon,
  ListoIcon,
  LocationIcon,
  MessureIcon,
  PartyIcon,
  PeopleIcon,
  PlaneIcon,
  ReservemosIcon,
  SnowflakeIcon,
  TVIcon,
  TwitterIcon,
  WifiIcon,
  YoutubeIcon,
} from '../../../ui/svg';

import { Content } from './styles';

interface IconI {
  ariaLabel: string;
  icon?: string;
  color?: string;
  direction?: string;
}

const Icon: FC<IconI> = ({
  ariaLabel = '',
  icon = '',
  color = '#2B2B2B',
  direction = 'bottom',
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'brand':
        return <BrandLogo ariaLabel={ariaLabel} />;
      case 'activities':
        return <ActivitiesIcon ariaLabel={ariaLabel} color={color} />;
      case 'add':
        return <AddIcon ariaLabel={ariaLabel} color={color} />;
      case 'arrowTop':
        return <ArrowTopIcon ariaLabel={ariaLabel} color={color} />;
      case 'bar':
        return <BarIcon ariaLabel={ariaLabel} color={color} />;
      case 'bath':
        return <BathIcon ariaLabel={ariaLabel} color={color} />;
      case 'bed':
        return <BedIcon ariaLabel={ariaLabel} color={color} />;
      case 'burger':
        return <BurgerIcon ariaLabel={ariaLabel} color={color} />;
      case 'calendar':
        return <CalendarIcon ariaLabel={ariaLabel} color={color} />;
      case 'check':
        return <CheckIcon ariaLabel={ariaLabel} color={color} />;
      case 'chevron':
        return <ChevronIcon ariaLabel={ariaLabel} color={color} />;
      case 'clock':
        return <ClockIcon ariaLabel={ariaLabel} color={color} />;
      case 'close':
        return <CloseIcon ariaLabel={ariaLabel} color={color} />;
      case 'coffee':
        return <CoffeeIcon ariaLabel={ariaLabel} color={color} />;
      case 'conocenos':
        return <ConocenosIcon ariaLabel={ariaLabel} color={color} />;
      case 'coworking':
        return <CoworkingIcon ariaLabel={ariaLabel} color={color} />;
      case 'email':
        return <EmailIcon ariaLabel={ariaLabel} color={color} />;
      case 'explore':
        return <ExploreIcon ariaLabel={ariaLabel} color={color} />;
      case 'facebook':
        return <FacebookIcon ariaLabel={ariaLabel} color={color} />;
      case 'gastro':
        return <GastroIcon ariaLabel={ariaLabel} color={color} />;
      case 'hotel':
        return <HotelIcon ariaLabel={ariaLabel} color={color} />;
      case 'increible':
        return <IncreibleIcon ariaLabel={ariaLabel} color={color} />;
      case 'instagram':
        return <InstagramIcon ariaLabel={ariaLabel} color={color} />;
      case 'lamp':
        return <LampIcon ariaLabel={ariaLabel} color={color} />;
      case 'language':
        return <LanguageIcon ariaLabel={ariaLabel} color={color} />;
      case 'less':
        return <LessIcon ariaLabel={ariaLabel} color={color} />;
      case 'listo':
        return <ListoIcon ariaLabel={ariaLabel} color={color} />;
      case 'location':
        return <LocationIcon ariaLabel={ariaLabel} color={color} />;
      case 'messure':
        return <MessureIcon ariaLabel={ariaLabel} color={color} />;
      case 'party':
        return <PartyIcon ariaLabel={ariaLabel} color={color} />;
      case 'people':
        return <PeopleIcon ariaLabel={ariaLabel} color={color} />;
      case 'plane':
        return <PlaneIcon ariaLabel={ariaLabel} color={color} />;
      case 'reservemos':
        return <ReservemosIcon ariaLabel={ariaLabel} color={color} />;
      case 'sknowflake':
        return <SnowflakeIcon ariaLabel={ariaLabel} color={color} />;
      case 'tv':
        return <TVIcon ariaLabel={ariaLabel} color={color} />;
      case 'twitter':
        return <TwitterIcon ariaLabel={ariaLabel} color={color} />;
      case 'wifi':
        return <WifiIcon ariaLabel={ariaLabel} color={color} />;
      case 'youtube':
        return <YoutubeIcon ariaLabel={ariaLabel} color={color} />;
      default:
        break;
    }
  };

  return <Content direction={direction}>{getIcon()}</Content>;
};

export default Icon;
