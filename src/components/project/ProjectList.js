import { Button, Card, Col, Row } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './ProjectList.less'
import { projectActions } from '../../redux/actions'
import ProjectFormModal from './ProjectFormModal'

const ProjectList = () => {
  const dispatch = useDispatch()
  const projectState = useSelector(state => state.project)

  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    dispatch({ type: projectActions.LOAD_PROJECTS.REQUEST })
  }, [])

  useEffect(() => {
    console.log(projectState)
  }, [projectState])

  return (
    <Fragment>
      <Row className="list-container" gutter={[16, 0]}>
        {projectState.projects.map(project => (
          <Col span={4}>
            <Card title={project.name} />
          </Col>
        ))}
        <Col span={4}>
          <Button onClick={() => {
            setShowAddModal(show => !show)
          }}>
            Add
          </Button>
        </Col>
      </Row>
      <ProjectFormModal
        visible={showAddModal}
        onCancel={() => setShowAddModal(false)}
        onFinish={(data) => {
          setShowAddModal(false)
          dispatch({ type: projectActions.CREATE_PROJECT.REQUEST, payload: data })
        }}
      />
    </Fragment>
  )
}

export default ProjectList
