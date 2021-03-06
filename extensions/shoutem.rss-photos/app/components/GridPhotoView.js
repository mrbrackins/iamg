import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from '@shoutem/ui';

/**
 * A component used to render a single grid photo item
 */
export default class GridPhotoView extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    photo: PropTypes.object.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { onPress, photo } = this.props;

    if (_.isFunction(onPress)) {
      onPress(photo);
    }
  }

  render() {
    const { photo, width, height } = this.props;
    const source = _.get(photo, 'source');

    // resizeMethod="resize" significantly improves image
    // rendering performance on Android for some reason:
    // https://github.com/facebook/react-native/issues/10569#issuecomment-273392208
    return (
      <View key={photo.id}>
        <TouchableOpacity onPress={this.onPress}>
          <Image
            styleName="placeholder"
            style={{ width, height }}
            source={source}
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
