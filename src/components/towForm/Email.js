import React, {useState} from 'react';
import './email.css'

const Email = ({img}) => {
    const [company, setCompany] = useState("")

    const companies = [
        {
            company:"Priority Towing", 
            // email:"prioritytow7305@bellsouth.net"
            email:"prioritytow7305@bellsouth.net"
        },
        {
            company:"Kelly Towing",
            // email:"info@kellesheehanstowing.com"
            email:"info@kellesheehanstowing.com"

        }

    ]

 
    const chooseCompany = () => {
      const companynav =   companies.map( (company,index) => (
            <div key={index} className=''>
                <button className='mr-4 btn btn-primary' onClick={() => setCompany(company.email)} >{company.company}</button>
            </div>
        ))
        return companynav
    }
    console.log('email',company)
    return (
        <div>
            <h3 className="text-white">Send Email</h3>
            {/* <button onClick={sendEmail}>Submit</button> */}
            <div className="d-flex justify-content-center mb-3">
            {chooseCompany()}
            </div>
            <a className="mt-5 email-link" href={`mailto:${company}`} >Email: {company}</a>
        </div>
    );
}

export default Email;
