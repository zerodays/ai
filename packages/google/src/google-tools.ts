import { codeExecution } from './tool/code-execution';
import { googleSearch } from './tool/google-search';
import { retrieval } from './tool/retrieval';
import { urlContext } from './tool/url-context';

export const googleTools = {
  /**
   * Creates a Google search tool that gives Google direct access to real-time web content.
   * Must have name "google_search".
   */
  googleSearch,

  /**
   * Creates a URL context tool that gives Google direct access to real-time web content.
   * Must have name "url_context".
   */
  urlContext,
  /**
   * A tool that enables the model to generate and run Python code.
   * Must have name "code_execution".
   *
   * @note Ensure the selected model supports Code Execution.
   * Multi-tool usage with the code execution tool is typically compatible with Gemini >=2 models.
   *
   * @see https://ai.google.dev/gemini-api/docs/code-execution (Google AI)
   * @see https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/code-execution-api (Vertex AI)
   */
  codeExecution,

  /**
   * A tool that enables Retrieval-Augmented Generation (RAG) by integrating
   * with Vertex AI Search as a retrieval backend. This tool allows the model to
   * retrieve relevant contexts from a RAG corpus based on search queries,
   * providing enhanced performance and scalability for knowledge-based
   * applications.
   *
   * The retrieval tool automatically retrieves data from Vertex AI Search when
   * specified in requests, helping to ensure that the model gets the most
   * relevant information from your corpus, leading to more accurate and
   * informative responses. It supports various configuration options including:
   * - Similarity-based top-k retrieval
   * - Vector distance thresholds
   * - Attribution controls
   *
   * Must have name "retrieval".
   *
   * @note Requires a configured RAG corpus with Vertex AI Search as the
   * backend.
   * @see
   * https://cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/use-vertexai-search
   * (Vertex AI)
   */
  retrieval,
};
