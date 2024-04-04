import React from 'react'
import GuideListPage from '../../components/screens/GuideListPage/GuideListPage'
import { observer } from 'mobx-react-lite'

const GuideList = () => {
  return (
    <div><GuideListPage /></div>
  )
}

export default observer(GuideList)