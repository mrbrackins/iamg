import React, { PureComponent } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { composeNavigationStyles, getRouteParams } from 'shoutem.navigation';
import { connectStyle } from '@shoutem/theme';
import {
  ScrollView,
  Screen,
  Title,
  Caption,
  Image,
  Tile,
  SimpleHtml,
  View,
  ShareButton,
} from '@shoutem/ui';
import { NextArticle } from '../components/NextArticle';
import { ext } from '../const';

export class ArticleDetailsScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setOptions(this.getNavBarProps());
  }

  getNavBarProps() {
    const { article } = getRouteParams(this.props);

    const headerRight = props => {
      if (!article.link) {
        return null;
      }

      return (
        <ShareButton
          // eslint-disable-next-line react/prop-types
          iconProps={{ style: props.tintColor }}
          styleName="clear"
          title={article.title}
          url={article.link}
        />
      );
    };

    if (this.isNavigationBarClear()) {
      if (article.image) {
        // If navigation bar is clear and image exists, navigation bar should be initially clear
        // but after scrolling down navigation bar should appear (solidify animation)
        return {
          ...composeNavigationStyles(['clear', 'solidify']),
          headerRight,
          title: '',
        };
      }
      // If navigation bar is clear, but there is no image, navigation bar should be set to solid,
      // but boxing animation should be applied so title appears after scrolling down

      return {
        ...composeNavigationStyles(['boxing']),
        headerRight,
        title: '',
      };
    }

    return {
      headerRight: props => (
        <ShareButton
          // eslint-disable-next-line react/prop-types
          iconProps={{ style: props.tintColor }}
          styleName="clear"
          title={article.title}
          url={article.link}
        />
      ),
      title: article.title,
    };
  }

  isNavigationBarClear() {
    const { screenSettings } = getRouteParams(this.props);
    return screenSettings.navigationBarStyle === 'clear';
  }

  renderUpNext() {
    const { nextArticle, openArticle } = getRouteParams(this.props);

    if (nextArticle && openArticle) {
      return (
        <NextArticle
          title={nextArticle.title}
          imageUrl={_.get(nextArticle, 'image.url')}
          openArticle={() => openArticle(nextArticle)}
        />
      );
    }
    return null;
  }

  renderImage() {
    const { article } = getRouteParams(this.props);

    if (article.image) {
      return (
        <Image
          styleName="large"
          source={{ uri: _.get(article, 'image.url') }}
          animationName="hero"
        />
      );
    }
    return null;
  }

  renderHeader() {
    const { article } = getRouteParams(this.props);

    return (
      <Tile styleName="text-centric md-gutter-bottom">
        <Title>{article.title.toUpperCase()}</Title>
        <View styleName="horizontal md-gutter-top">
          <Caption numberOfLines={1}>{article.newsAuthor}</Caption>
          <Caption styleName="md-gutter-left">
            {moment(article.timeUpdated).fromNow()}
          </Caption>
        </View>
      </Tile>
    );
  }

  render() {
    const { article } = getRouteParams(this.props);

    return (
      <Screen styleName="paper">
        <ScrollView>
          {this.renderImage()}
          <View styleName="solid">
            {this.renderHeader()}
            <View styleName="sm-gutter-horizontal md-gutter-vertical">
              <SimpleHtml body={article.body} />
            </View>
            {this.renderUpNext()}
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default connectStyle(ext('ArticleDetailsScreen'))(ArticleDetailsScreen);
