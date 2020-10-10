import { Button, Card, Col, Row } from 'antd';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { RootStoreContext } from '../../app/stores/rootStore'
import { DeleteOutlined } from '@ant-design/icons'
import PhotoUploadWidget from '../../app/common/photoUpload/PhotoUploadWidget';
import { observer } from 'mobx-react-lite';

const ProfilePhotos = () => {
    const rootStore = useContext(RootStoreContext)
    const { profile, isCurrentUser, uploadPhoto, uploadingPhoto, setMainPhoto, loading, deletePhoto } = rootStore.profileStore;
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState<string | undefined>(undefined);
    const [deleteTarget, setDeleteTarget] = useState<string | undefined>(undefined);

    const handleUploadImage = (photo: Blob) => {
        uploadPhoto(photo).then(() => setAddPhotoMode(false))
    }

    return (
        <Container>
            {isCurrentUser &&
                <Button style={{ position: 'absolute', top: 30, right: 30 }} onClick={() => setAddPhotoMode(!addPhotoMode)}>
                    {addPhotoMode ? 'Cancel' : 'Add Photo'}
                </Button>}
            {addPhotoMode ? (
                <PhotoUploadWidget uploadPhoto={handleUploadImage} loading={uploadingPhoto} />
            ) : (
                    <>
                        { profile && profile.photos.map(photo => (
                            <Card
                                key={photo.id}
                                bodyStyle={{ padding: "0" }}
                                hoverable
                                style={{ width: 240, margin: '0 10px 20px 10px' }}
                                cover={<img alt="example" src={photo.url} />}
                            >
                                {isCurrentUser &&
                                    <Row>
                                        <Col span={12}>
                                            <Button
                                                onClick={() => {
                                                    setMainPhoto(photo);
                                                    setTarget(photo.id)
                                                }}
                                                disabled={photo.isMain}
                                                loading={loading && target === photo.id}
                                                style={{ width: "100%" }}
                                                type="primary">Main</Button>
                                        </Col>
                                        <Col span={12}>
                                            <Button
                                                disabled={photo.isMain}
                                                onClick={() => {
                                                    deletePhoto(photo);
                                                    setDeleteTarget(photo.id)
                                                }}
                                                loading={loading && deleteTarget === photo.id}
                                                style={{ width: "100%" }}
                                                danger
                                                type="primary"><DeleteOutlined /></Button>
                                        </Col>
                                    </Row>}
                            </Card>
                        ))}
                    </>)}
        </Container>
    )
}

export default observer(ProfilePhotos);

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
