import React from 'react'
import { albums } from './albumdata'
class Album extends React.Component {
    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-warning text-white">
                            <tr>
                                <th>Album Id</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                albums.map((album) => {
                                    return <tr key={album.id}>
                                        <td>{album.albumId}</td>
                                        <td>{album.id}</td>
                                        <td>{album.title}</td>
                                        <td><img src={album.thumbnailUrl} /></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default Album