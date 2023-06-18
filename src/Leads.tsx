import React from "react";
import { supabase } from "./App";

export const Leads = () => {

    const [leads, setLeads] = React.useState<{ [x: string]: any; }[]>();

    React.useEffect(()=>{

        const getLeads = async () => {
            let { data: Leads, error } = await supabase.from('Leads').select('*')
            setLeads(Leads);
        }
        getLeads();
    }, [])

    return <div>
        
            <table style={{margin: "15px"}}>
                <thead>
                <tr>
                    <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>linkedin</th>
                <th>roles</th>
                </tr>
                    
                </thead>
                
                <tbody>
                 {leads?.map((lead)=>(
                    <tr key={lead.id}>
                         <td>{lead.first}</td>
                        <td>{lead.last}</td>
                        <td>{lead.email}</td>
                        <td>{lead.linkedin || "None provided"}</td>
                        <td>{lead.roles}</td>
                    </tr>
                   
                ))}   
                </tbody>
                
            </table>
    </div>
}