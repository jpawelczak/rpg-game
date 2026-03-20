export default class DialogueManager {
    constructor(scene) {
        this.scene = scene;
        this.box = document.getElementById('dialogue-box');
        this.speakerEl = document.getElementById('dialogue-speaker');
        this.textEl = document.getElementById('dialogue-text');
        this.choicesEl = document.getElementById('dialogue-choices');
        
        this.currentCompany = null;
        this.currentNode = null;
        this.onComplete = null;
        this.typewriterTimer = null;
    }

    startConversation(companyData, onCompleteCallback) {
        this.currentCompany = companyData;
        this.onComplete = onCompleteCallback;
        this.box.style.display = 'block';
        this.speakerEl.innerText = companyData.contactName + " (" + companyData.name + ")";
        this.showNode(companyData.nodes['start']);
    }

    showNode(nodeId) {
        // If node is "end", finish conversation
        if (nodeId === 'end') {
            this.endConversation();
            return;
        }

        const node = this.currentCompany.dialogueTree[nodeId];
        this.currentNode = node;
        
        // Clear previous choices
        this.choicesEl.innerHTML = '';
        this.textEl.innerText = '';

        // Typewriter effect
        let index = 0;
        const textToType = node.text;
        
        if (this.typewriterTimer) clearInterval(this.typewriterTimer);
        
        this.typewriterTimer = setInterval(() => {
            this.textEl.innerText += textToType.charAt(index);
            index++;
            if (index >= textToType.length) {
                clearInterval(this.typewriterTimer);
                this.showChoices(node.choices);
            }
        }, 20); // ms per character
    }

    showChoices(choices) {
        if (!choices || choices.length === 0) {
            // Provide a generic "Leave" option if no choices
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = "Leave";
            btn.onclick = () => this.showNode('end');
            this.choicesEl.appendChild(btn);
            return;
        }

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = choice.text;
            btn.onclick = () => {
                this.showNode(choice.nextNode);
            };
            this.choicesEl.appendChild(btn);
        });
    }

    endConversation() {
        if (this.typewriterTimer) clearInterval(this.typewriterTimer);
        this.box.style.display = 'none';
        if (this.onComplete) {
            this.onComplete();
        }
    }
}
