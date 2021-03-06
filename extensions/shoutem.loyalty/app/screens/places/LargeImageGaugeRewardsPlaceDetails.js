import React from 'react';
import autoBindReact from 'auto-bind/react';
import { connect } from 'react-redux';
import { connectStyle } from '@shoutem/theme';
import { ImageBackground, Tile, Title, View } from '@shoutem/ui';
import RewardsGaugeProgressBar from '../../components/RewardsGaugeProgressBar';
import PlacePointsRewardListView from '../../components/PlacePointsRewardListView';
import { ext } from '../../const';
import {
  PlaceDetails,
  mapStateToProps,
  mapDispatchToProps,
} from './PlaceDetails';

const gaugeContainerStyleNames =
  'flexible vertical h-center v-center md-gutter-horizontal lg-gutter-vertical';

export class LargeImageGaugeRewardsPlaceDetails extends PlaceDetails {
  static propTypes = {
    ...PlaceDetails.propTypes,
  };

  constructor(props) {
    super(props);

    autoBindReact(this);
  }

  renderLeadImage() {
    const { place } = this.props;
    const { image, name } = place;

    return (
      <ImageBackground
        animationName="hero"
        source={image && { uri: image.url }}
        styleName="large-portrait"
      >
        <Tile>
          <Title>{name.toUpperCase()}</Title>
          {this.renderPointsInline()}
        </Tile>
      </ImageBackground>
    );
  }

  renderPointsInline() {
    const { place, rewards } = this.props;
    const { points } = place;

    return (
      <View styleName={gaugeContainerStyleNames}>
        <RewardsGaugeProgressBar
          place={place}
          points={points}
          rewards={rewards}
          onCollectPoints={this.collectPoints}
          styleName="secondary"
        />
      </View>
    );
  }

  renderPoints() {
    return null;
  }

  renderRewardRow(reward) {
    const { place } = this.props;

    return (
      <PlacePointsRewardListView
        key={reward.id}
        onPress={this.navigateToRewardDetailsScreen}
        place={place}
        reward={reward}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  connectStyle(ext('LargeImageGaugeRewardsPlaceDetails'))(
    LargeImageGaugeRewardsPlaceDetails,
  ),
);
