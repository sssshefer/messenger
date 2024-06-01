import React, {FC} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import {useConversations} from "../../shared/contexts/ConversationProvider/ConversationProvider";
import OpenConversation from "../OpenConversation/OpenConversation";

interface DashboardProps {
    id: string;
}

const Dashboard:FC<DashboardProps> = ({id}) => {
    const { selectedConversation } = useConversations()

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar id={id}/>
            {selectedConversation && <OpenConversation />}
        </div>
    );
};

export default Dashboard;