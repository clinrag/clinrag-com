import Link from "next/link";

export default function BuildMedicalRAG() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/guides" className="text-teal-600 hover:text-teal-700 text-sm font-medium">← Back to Guides</Link>
      </div>

      <article className="prose-clinical">
        <h1>How to Build a Medical RAG System</h1>
        <p className="text-xl text-gray-500 mb-8">A practical step-by-step guide from data ingestion to a working clinical RAG pipeline.</p>

        <h2>Step 1: Define Your Use Case</h2>
        <p>Before building anything, clearly define what your medical RAG system will do:</p>
        <ul>
          <li><strong>Clinical decision support?</strong> Answering diagnostic and treatment questions</li>
          <li><strong>Literature review?</strong> Synthesizing research findings</li>
          <li><strong>Patient education?</strong> Generating lay-language explanations</li>
          <li><strong>Drug information?</strong> Checking interactions and contraindications</li>
        </ul>
        <p>Your use case determines what documents you need, how you structure retrieval, and what LLM you choose.</p>

        <h2>Step 2: Collect and Prepare Documents</h2>
        <p>The quality of your RAG system depends on the quality of your knowledge base:</p>
        <ul>
          <li><strong>Clinical guidelines:</strong> NICE, AHA, ACC, IDSA guidelines</li>
          <li><strong>Drug databases:</strong> RxNorm, DrugBank, prescribing information</li>
          <li><strong>Medical literature:</strong> PubMed Central open-access articles</li>
          <li><strong>Hospital protocols:</strong> Internal clinical pathways</li>
        </ul>
        <p>Use tools like <Link href="/tools/ragflow-healthcare">RAGFlow</Link> for complex PDF parsing with tables and figures.</p>

        <h2>Step 3: Choose Your Chunking Strategy</h2>
        <p>Medical documents require careful chunking:</p>
        <ul>
          <li><strong>By section:</strong> Chunk by headings (Diagnosis, Treatment, Prognosis)</li>
          <li><strong>By semantic unit:</strong> Keep related concepts together</li>
          <li><strong>Overlap:</strong> Use 10-20% overlap to preserve context across chunk boundaries</li>
          <li><strong>Metadata:</strong> Tag each chunk with source, date, and medical specialty</li>
        </ul>

        <h2>Step 4: Choose Embedding Model</h2>
        <p>The embedding model converts text into vectors for semantic search:</p>
        <ul>
          <li><strong>Cloud:</strong> OpenAI text-embedding-3-large, highest quality but data leaves your system</li>
          <li><strong>Local:</strong> BGE-large, E5-large, or MedCPT (medical-specific) for HIPAA compliance</li>
          <li><strong>Medical-specific:</strong> Models fine-tuned on biomedical text perform better on clinical queries</li>
        </ul>

        <h2>Step 5: Choose Vector Store</h2>
        <p>Store and search your document embeddings:</p>
        <ul>
          <li><strong>FAISS:</strong> Fast, local, good for prototyping</li>
          <li><strong>Milvus:</strong> Scalable, supports hybrid search</li>
          <li><strong>Pinecone:</strong> Managed service, easy to use</li>
          <li><strong>pgvector:</strong> PostgreSQL extension, good for existing infrastructure</li>
        </ul>

        <h2>Step 6: Build the Retrieval Pipeline</h2>
        <p>Use a framework like <Link href="/tools/langchain-medical-rag">LangChain</Link> or <Link href="/tools/llamaindex-clinical-rag">LlamaIndex</Link>:</p>
        <pre>{`from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

# Load medical documents
loader = DirectoryLoader("./medical_docs/")
documents = loader.load()

# Chunk documents
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(documents)

# Embed and store
embeddings = HuggingFaceEmbeddings(model_name="BAAI/bge-large-en")
vectorstore = FAISS.from_documents(chunks, embeddings)

# Query
results = vectorstore.similarity_search("treatment for hypertension", k=5)`}</pre>

        <h2>Step 7: Configure the LLM</h2>
        <p>Choose and configure your LLM for generation:</p>
        <ul>
          <li><strong>Cloud LLMs:</strong> GPT-4, Claude — best quality, but data privacy concerns</li>
          <li><strong>Local LLMs:</strong> Llama 3, Mixtral — full data control, requires GPU</li>
          <li><strong>Medical LLMs:</strong> Meditron, BioMistral — fine-tuned on medical text</li>
        </ul>

        <h2>Step 8: Design Medical Prompts</h2>
        <p>Your prompt template should enforce evidence-based responses:</p>
        <pre>{`You are a clinical decision support assistant. Answer the question
using ONLY the provided medical context. If the context does not
contain sufficient information, say so explicitly.

Always cite your sources. Format responses with:
1. Direct answer
2. Supporting evidence from context
3. Source citations
4. Confidence level

Context:
{context}

Question: {question}

Answer:`}</pre>

        <h2>Step 9: Test and Evaluate</h2>
        <p>Test your system with real clinical questions:</p>
        <ul>
          <li>Compare answers against clinical guidelines</li>
          <li>Check for hallucinations — fabricated drugs, incorrect dosages</li>
          <li>Verify citations point to correct source documents</li>
          <li>Have clinicians review sample outputs</li>
        </ul>
        <p>Use our <Link href="/guides/evaluation-checklist">Clinical RAG Evaluation Checklist</Link> for a systematic approach.</p>

        <h2>Step 10: Deploy</h2>
        <p>For production deployment, consider:</p>
        <ul>
          <li>On-premise deployment for HIPAA compliance (see <Link href="/guides/private-deployment">Private Deployment Guide</Link>)</li>
          <li>Monitoring and logging for clinical safety</li>
          <li>Regular knowledge base updates</li>
          <li>Performance optimization for clinical workflows</li>
        </ul>
      </article>
    </div>
  );
}
