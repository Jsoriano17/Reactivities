import { Button, Card, Col, Row } from 'antd';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { RootStoreContext } from '../../app/stores/rootStore'
import { DeleteOutlined } from '@ant-design/icons'
import PhotoUploadWidget  from '../../app/common/photoUpload/PhotoUploadWidget';

const ProfilePhotos = () => {
    const rootStore = useContext(RootStoreContext)
    const { profile, isCurrentUser } = rootStore.profileStore;
    const [addPhotoMode, setAddPhotoMode] = useState(false);

    return (
        <Container>
            {isCurrentUser &&
                <Button style={{ position: 'absolute', top: 30, right: 30 }} onClick={() => setAddPhotoMode(!addPhotoMode)}>
                    {addPhotoMode ? 'Cancel' : 'Add Photo'}
                </Button>}
            {addPhotoMode ? (
                <PhotoUploadWidget />
            ) : (
            <>
            { profile && profile.photos.map(photo => (
                <Card
                    key={photo.id}
                    bodyStyle={{ padding: "0" }}
                    hoverable
                    style={{ width: 240, margin: '0 15px' }}
                    cover={<img alt="example" src={photo.url} />}
                >
                    {isCurrentUser &&
                        <Row>
                            <Col span={12}>
                                <Button style={{ width: "100%" }} type="primary">Main</Button>
                            </Col>
                            <Col span={12}>
                                <Button style={{ width: "100%" }} danger type="primary"><DeleteOutlined /></Button>
                            </Col>
                        </Row>}
                </Card>
            ))}
            </> )}
        </Container>
    )
}

export default ProfilePhotos

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
