import React from 'react'
import styles from './ListPage.scss'

class ListPage extends React.Component {
  render() {
    return (
      <div>
        {/* header */}
        <nav className={styles['header-bar']}>
          <div>E-Application</div>
        </nav>

        {/* filterbar */}
        <div className={styles['filter-bar']}>
          <label>Search</label>
          <input type="text"/>
          <label>Filter</label>
          <select name="status" id="status">
            <option value="sm">SM</option>
            <option value="dr">DR</option>
          </select>
          <button>Create App</button>
        </div>

        {/* applist */}
        <div className={styles['app-list']}>
          <div className={styles['list']}>
            <div className={styles['item']}>
              appId: aaa-111
              status: dr
            </div>
            <div className={styles['item']}>
              appId: bbb-222
              status: sm
            </div>
            <div className={styles['item']}>
              appId: ccc-333
              status: sm
            </div>
          </div>
        </div>

        {/* appdetail */}
        <div className={styles['app-detail']}>
          <div className={styles['container']}>
            <div className={styles['title']}>
              Application
            </div>
            <div className={styles['label-group']}>
              <label className={styles['title']}>
                AppId
              </label>
              <label className={styles['text']}>
                aaa-111
              </label>
            </div>
            <div className={styles['label-group']}>
              <label className={styles['title']}>
                Status
              </label>
              <label className={styles['text']}>
                DR
              </label>
            </div>
            <div className={styles['label-group']}>
              <label className={styles['title']}>
                First Name
              </label>
              <label className={styles['text']}>
                aaa
              </label>
            </div>
            <div className={styles['label-group']}>
              <label className={styles['title']}>
                Last Name
              </label>
              <label className={styles['text']}>
                111
              </label>
            </div>
            <div className={styles['control-bar']}>
              <button className={styles['edit-btn']}>Edit</button>
              <button className={styles['delete-btn']}>Delete</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ListPage