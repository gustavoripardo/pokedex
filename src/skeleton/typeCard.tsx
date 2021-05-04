import React from 'react';
import { Dimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// import { Container } from './styles';

const TypeCardSkeleton = () => {


    const windowWidth = Dimensions.get('window').width;
    const minColumns = windowWidth >= 1000 ? 3 : 2
    const minWidth = minColumns == 3 ? 300 : windowWidth / 2.1

    return (
        <View>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={minWidth} height={160} borderRadius={10} right={15} bottom={5}/>
            </SkeletonPlaceholder>
        </View>
    );
}

export default TypeCardSkeleton;