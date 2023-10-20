import React from "react";
import { Dialog, DialogFooter, PrimaryButton } from "@fluentui/react";

interface PopupModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    title: string;
    subText: string;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onDismiss, title, subText }) => {
    return (
        <Dialog
            hidden={!isOpen}
            onDismiss={() => alert("To use the application you need to confirm the terms and conditions")}
            dialogContentProps={{
                title: title,
                // subText: subText ,
            }}
            maxWidth={700}
            
            modalProps={{
                isBlocking: true,
                styles: { main: { maxHeight: 500 } },
            }}
        >
        <h3 style={{
            fontWeight: 600
        }}>Terms and Conditions for PHOENIX GPT:</h3>
        <ul>
            <li>The AI chatbot is designed to assist in general office work. It is not intended to provide medical advice or replace the advice of a qualified healthcare professional.</li>
            <li>Costs of usage will be charged to countries, proportional to actual usage and costs. Price information is [here].</li>
            <li>Microsoft code of conduct for the Open AI service applies: https://learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct?source=recommendations</li>
            <li>The chatbot's responses are generated using the Open AI language model and may not always be accurate or complete. The chatbot's knowledge is limited to the information available in its database and may not be up-to-date or comprehensive.</li>
            <li>Users should not rely solely on the chatbot's responses and always rely on their own judgement. The chatbot is not a substitute for professional advice.</li>

            <li>The makers of the chatbot are not liable for any damages or losses resulting from the use of the chatbot. Users assume all risks associated with the use of the chatbot.</li>
            <li>The chatbot is provided "as is" we make no warranties or representations regarding its accuracy, reliability, or suitability for any particular purpose.</li>
            <li>The chatbot may be subject to downtime or interruptions due to maintenance, upgrades, or other technical issues. IT&D is not liable for any damages or losses resulting from such downtime or interruptions.</li>
            <li>We reserve the right to modify or terminate the chatbot at any time without notice.</li>
            <li>By using the chatbot, users agree to these terms and conditions and acknowledge that they have read and understood them.</li>
        </ul>
        <DialogFooter>
                <PrimaryButton onClick={onDismiss} text="Confirm" />
            </DialogFooter>
        </Dialog>
    );
};

export default PopupModal;