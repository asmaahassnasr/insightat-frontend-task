import React from 'react';
import {SurveyNavBar} from '../survey/components/surveyNavBar';
import { SurveyAnalyzeSideBar } from '../survey/surveyAnalyze/surveyAnalyzeSideBar';
 
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

import customer from '../assets/image/customer.png';

import './adminUser.css';  


export const AdminUser = () => {
    return (
      <>
      <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col">
                     
                        <div className="row header"> 
                         
                         <p><strong>Users</strong> 1390 total</p>

                          <div className="col-3"></div>
                         <button className="btnStyle" style={{marginRight:'5px'}}>Export</button>
                         
                         <button className="btnStyle">Delete</button>
                         
                          <InputGroup className="col-4">
                          <FormControl
                            placeholder="Search" 
                          />
                          <InputGroup.Append>
                            <button><i className="fa fa-search"></i></button>
                          </InputGroup.Append>
                        </InputGroup>

                         <button className="btnStyle" style={{backgroundColor:'#fa7268',color:'#fff'}}>Add User</button>
                             
   
                    </div>
              
              <div className="containDataTable">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th style={{width:'26px'}}> 
                          <InputGroup.Checkbox/>
                          </th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Last Seen</th>
                          <th>Sign Up</th>
                          <th>Plan</th>
                          <th>ID</th>
                          <th>Country</th>
                          <th></th> 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                       
                       </tbody>
                    </Table>
              </div>
               </div>
               </div>
     </div>
    
    </>
     );
}
