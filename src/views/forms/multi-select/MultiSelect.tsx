import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CMultiSelect, CRow } from '@coreui/react-pro'
import { DocsComponents, DocsExample } from 'src/components'

const MultiSelect = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
      selected: true,
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="forms/multi-select/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>CoreUI React Multi Select</strong> <small>with Checkbox (Default Style)</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/multi-select">
              <CRow>
                <CCol md={3}>
                  <CMultiSelect options={options} multiple={false} />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} selectionType="text" />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} selectionType="tags" />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} selectionType="counter" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>CoreUI React Multi Select</strong> <small>with Text</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/multi-select">
              <CRow>
                <CCol md={3}>
                  <CMultiSelect options={options} optionsStyle="text" multiple={false} />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} optionsStyle="text" selectionType="text" />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} optionsStyle="text" selectionType="tags" />
                </CCol>
                <CCol md={3}>
                  <CMultiSelect options={options} optionsStyle="text" selectionType="counter" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MultiSelect
