import Link from "next/link";

export default function PrivateDeployment() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/guides" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Guides</Link>
      </div>

      <article className="prose-clinical">
        <h1>Private Medical RAG Deployment</h1>
        <p className="text-xl text-gray-500 mb-8">How to deploy a HIPAA-compliant RAG system that keeps patient data on-premise.</p>

        <h2>Why Private Deployment Matters</h2>
        <p>Healthcare data is subject to strict privacy regulations. In the US, HIPAA requires that Protected Health Information (PHI) be handled with specific safeguards. Using cloud LLM APIs (OpenAI, Anthropic) sends patient data to external servers, which may violate HIPAA unless a Business Associate Agreement (BAA) is in place.</p>
        <p>A fully private, on-premise RAG deployment ensures that:</p>
        <ul>
          <li>Patient data never leaves your infrastructure</li>
          <li>All processing happens within your controlled environment</li>
          <li>You maintain a complete audit trail</li>
          <li>You control data retention and deletion</li>
        </ul>

        <h2>Architecture Overview</h2>
        <pre>{`┌─────────────────────────────────────────────────┐
│                  Your Firewall                   │
│  ┌─────────┐   ┌───────────┐   ┌─────────────┐  │
│  │  App    │──→│ Embedding │──→│  Vector     │  │
│  │  Server │   │  Model    │   │  Store      │  │
│  └────┬────┘   └───────────┘   └─────────────┘  │
│       │                                         │
│       ▼                                         │
│  ┌──────────┐   ┌───────────┐   ┌─────────────┐ │
│  │  User    │←──│  LLM     │←──│  Knowledge  │ │
│  │  UI/API  │   │ (local)  │   │  Base       │ │
│  └──────────┘   └───────────┘   └─────────────┘ │
└─────────────────────────────────────────────────┘`}</pre>

        <h2>Component Selection</h2>

        <h3>Local LLM Options</h3>
        <ul>
          <li><strong>LLaMA 3 (8B/70B):</strong> Good general capability, runs on a single GPU (8B) or multi-GPU (70B)</li>
          <li><strong>Mixtral 8x7B:</strong> High quality, requires ~48GB VRAM</li>
          <li><strong>Meditron:</strong> Medical-specific fine-tuning of LLaMA</li>
          <li><strong>BioMistral:</strong> Fine-tuned on biomedical literature</li>
        </ul>

        <h3>Local Embedding Models</h3>
        <ul>
          <li><strong>BGE-large-en:</strong> High quality, runs on CPU or GPU</li>
          <li><strong>E5-large-v2:</strong> Good balance of quality and speed</li>
          <li><strong>MedCPT:</strong> Medical-specific embeddings</li>
        </ul>

        <h3>Vector Store</h3>
        <ul>
          <li><strong>FAISS:</strong> Simple, runs in-process, no network exposure</li>
          <li><strong>Milvus (standalone):</strong> More features, can run in a container</li>
          <li><strong>pgvector:</strong> If you already use PostgreSQL</li>
        </ul>

        <h2>Deployment Steps</h2>

        <h3>1. Set Up Infrastructure</h3>
        <pre>{`# Minimum requirements for 8B model:
# - GPU: NVIDIA A10 (24GB VRAM) or equivalent
# - CPU: 8 cores
# - RAM: 32GB
# - Storage: 100GB SSD

# Install Ollama for local LLM serving
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3:8b
ollama pull nomic-embed-text

# Install vector store
docker run -d --name milvus \
  -p 19530:19530 \
  milvusdb/milvus:standalone`}</pre>

        <h3>2. Deploy the RAG Application</h3>
        <p>Use a framework like <Link href="/tools/langchain-medical-rag">LangChain</Link> or <Link href="/tools/ragflow-healthcare">RAGFlow</Link> with local models:</p>
        <pre>{`from langchain_community.llms import Ollama
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import FAISS

# All local, no external API calls
llm = Ollama(model="llama3:8b", temperature=0.1)
embeddings = OllamaEmbeddings(model="nomic-embed-text")

# Load from local medical documents
vectorstore = FAISS.load_local("medical_index", embeddings)

# Query - all processing stays on your server
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever()
)
result = qa_chain.invoke({"query": clinical_question})`}</pre>

        <h3>3. Network Security</h3>
        <ul>
          <li>Deploy behind a firewall with no external API access</li>
          <li>Use TLS for all internal service communication</li>
          <li>Implement authentication and role-based access control</li>
          <li>Log all queries for audit purposes</li>
        </ul>

        <h3>4. HIPAA Compliance Checklist</h3>
        <ul>
          <li>[ ] All data encrypted at rest (AES-256)</li>
          <li>[ ] All data encrypted in transit (TLS 1.3)</li>
          <li>[ ] Access controls with unique user authentication</li>
          <li>[ ] Audit logging of all data access</li>
          <li>[ ] Automatic session timeout</li>
          <li>[ ] Data backup with encryption</li>
          <li>[ ] Disaster recovery plan documented</li>
          <li>[ ] Risk analysis completed</li>
          <li>[ ] Business associate agreements with all vendors</li>
        </ul>

        <h2>Performance Considerations</h2>
        <ul>
          <li><strong>GPU memory:</strong> 8B model fits in 24GB, 70B needs 4-8 GPUs</li>
          <li><strong>Quantization:</strong> Use 4-bit or 8-bit quantization to reduce memory</li>
          <li><strong>Caching:</strong> Cache frequent queries to reduce load</li>
          <li><strong>Batching:</strong> Process embedding requests in batches</li>
        </ul>

        <p>Need ready-to-use configurations? Check our <Link href="/templates">Templates</Link> section.</p>
      </article>
    </div>
  );
}
