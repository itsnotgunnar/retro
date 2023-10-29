import autogen

# Configuration for AI agents
llm_config={
    "request_timeout": 600,
    "seed": 42,
    "config_list": [{"model": "gpt-4", "api_key": "API_KEY"}],
    "temperature": 0
}

# Define agents for each role

project_manager = autogen.AssistantAgent(
    name="ProjectManager",
    llm_config=llm_config,
    system_message="Manages project scope, timeline, and resource allocation."
)

react_component_dev = autogen.AssistantAgent(
    name="ReactComponentDeveloper",
    llm_config=llm_config,
    system_message="Develops reusable React components."
)

styling_dev = autogen.AssistantAgent(
    name="StylingDev",
    llm_config=llm_config,
    system_message="Applies styles to React components."
)

database_architect = autogen.AssistantAgent(
    name="DatabaseArchitect",
    llm_config=llm_config,
    system_message="Designs and structures the database schema."
)

api_dev = autogen.AssistantAgent(
    name="APIDeveloper",
    llm_config=llm_config,
    system_message="Develops API endpoints."
)

state_management = autogen.AssistantAgent(
    name="StateManagement",
    llm_config=llm_config,
    system_message="Handles state management setup."
)

router_manager = autogen.AssistantAgent(
    name="RouterManager",
    llm_config=llm_config,
    system_message="Manages routing logic."
)

auth_specialist = autogen.AssistantAgent(
    name="AuthSpecialist",
    llm_config=llm_config,
    system_message="Handles authentication and authorization."
)

frontend_tester = autogen.AssistantAgent(
    name="FrontendTester",
    llm_config=llm_config,
    system_message="Performs front-end unit testing."
)

backend_tester = autogen.AssistantAgent(
    name="BackendTester",
    llm_config=llm_config,
    system_message="Performs back-end unit testing."
)

e2e_tester = autogen.AssistantAgent(
    name="E2ETester",
    llm_config=llm_config,
    system_message="Conducts end-to-end testing."
)

# User Proxy Agent
user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={"work_dir": "web"},
    llm_config=llm_config,
    system_message="""Reply TERMINATE if the task has been solved at full satisfaction.
    Otherwise, reply CONTINUE, or the reason why the task is not solved yet."""
)

# Define tasks for each role

task_list = [
    {
        "agent": project_manager,
        "message": "Define project scope, timeline, and resource allocation."
    },
    {
        "agent": react_component_dev,
        "message": "Develop reusable React components."
    },
    {
        "agent": styling_dev,
        "message": "Style the React components."
    },
    {
        "agent": database_architect,
        "message": "Design the database schema."
    },
    {
        "agent": api_dev,
        "message": "Develop the API endpoints."
    },
    {
        "agent": state_management,
        "message": "Set up state management."
    },
    {
        "agent": router_manager,
        "message": "Implement routing logic."
    },
    {
        "agent": auth_specialist,
        "message": "Implement authentication and authorization."
    },
    {
        "agent": frontend_tester,
        "message": "Perform front-end unit tests."
    },
    {
        "agent": backend_tester,
        "message": "Perform back-end unit tests."
    },
    {
        "agent": e2e_tester,
        "message": "Perform end-to-end tests."
    }
]

# Initiate tasks sequentially
for task in task_list:
    user_proxy.initiate_chat(task["agent"], message=task["message"])