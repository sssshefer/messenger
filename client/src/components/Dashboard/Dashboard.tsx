import React, {FC} from 'react';
import Sidebar from "../Sidebar/Sidebar";

interface DashboardProps {
    id: string;
}

const Dashboard:FC<DashboardProps> = ({id}) => {
    return (
        <div>
            {id}
            <Sidebar id={id}/>
        </div>
    );
};

export default Dashboard;