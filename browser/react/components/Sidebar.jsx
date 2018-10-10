import React from 'react';
import { Link, Route } from 'react-router-dom'; 

export default () => (
  <div className="col-xs-2">

      <sidebar>

        <img src="/juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <Link to="/albums">ALBUMS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/artists">ARTISTS</Link>
          </h4>
        </section>

        <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <h4>
            <Link className="btn btn-primary btn-block" to='/newplaylist'>
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
          </h4>
        </section>

      </sidebar>

    </div>
);