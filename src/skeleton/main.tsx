import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Navbar from '../components/navbar';


const Main: React.FC = () => {
    return (
        <View
            style={{ marginBottom: 150 }}
        >
            <Navbar btnLeft="home" btnRight="menu" position='left' />
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
                    <SkeletonPlaceholder.Item marginLeft={20}>
                        <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
                        <SkeletonPlaceholder.Item
                            marginTop={6}
                            width={80}
                            height={20}
                            borderRadius={4}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    );
}

export default Main;