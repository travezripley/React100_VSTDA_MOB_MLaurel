import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <div className='row'>
          <h1 className='col-12 text-white'>Very Simple Todo App</h1>
          <p className='col-12 text-white'>Track all of the things</p>
          {/* <p className='col-12 border-top border-white'></p> */}
        </div>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <div className='card-header'>Add New Todo</div>
              <div className='card-body'>
                <div className='form-group'>
                  <label htmlFor='todo' className='font-weight-bold'>
                                        I want to..
                                    </label>
                  <textarea className='form-control' id='todo' rows='3' />
                </div>
                <div className='form-group'>
                  <label htmlFor='priority' className='font-weight-bold'>
                                        How much of a priority is this?
                                    </label>
                  <select className='form-control' id='priority'>
                    <option>Select a Priority</option>
                  </select>
                </div>
              </div>
              <div className='card-footer'>
                <button className='btn btn-success btn-block'>Add</button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='card'>
              <div className='card-header'>View Todos</div>
              <div className='card-body p-0'>
                <div className='row alert alert-success no-gutters m-0 rounded-0'>
                  <div className='col-11'>
                    <div className='form-group form-check m-0'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                          />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'
                          >
                                                Pick up milk from the store
                                            </label>
                      </div>
                  </div>
                  <div className='col-1'>
                    <i className='fas fa-trash-alt red float-right p-1' />
                    <i className='fas fa-edit blue float-right p-1' />
                  </div>
                </div>
                <div className='row alert alert-warning no-gutters m-0 rounded-0'>
                  <div className='col-11'>
                    <div className='form-group form-check m-0'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                          />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'
                          >
                                                Pick up milk from the store
                                            </label>
                      </div>
                  </div>
                  <div className='col-1'>
                    <i className='fas fa-trash-alt red float-right p-1' />
                    <i className='fas fa-edit blue float-right p-1' />
                  </div>
                </div>
                <div className='row alert alert-danger no-gutters m-0 rounded-0'>
                  <div className='col-11'>
                    <div className='form-group form-check m-0'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                          />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'
                          >
                                                Pick up milk from the store
                                            </label>
                      </div>
                  </div>
                  <div className='col-1'>
                    <i className='fas fa-trash-alt red float-right p-1' />
                    <i className='fas fa-edit blue float-right p-1' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
