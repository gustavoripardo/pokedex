import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const ListCard: React.FC = () => {

    const windowWidth = Dimensions.get('window').width;
    return (
        <View>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item marginLeft={20} flexDirection="row" marginTop={5}>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item marginLeft={20} flexDirection="row" justifyContent="space-between">
                    <SkeletonPlaceholder.Item width={windowWidth / 1.5} height={40} borderRadius={4} right={15} />
                    <SkeletonPlaceholder.Item width={60} height={40} borderRadius={4} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>


            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" justifyContent="space-between" marginTop={5}>
                    <SkeletonPlaceholder.Item width={windowWidth / 2.2} height={180} borderRadius={10} />
                    <SkeletonPlaceholder.Item width={windowWidth / 2.2} height={180} borderRadius={10} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    );
}

export default ListCard;