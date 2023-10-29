import autogen
import time
from queue import Queue

# Initialize task queue
task_queue = Queue()

# Configuration for all agents
llm_config = {
    "request_timeout": 600,
    "seed": 42,
    "config_list": [
        {
            'model': 'gpt-4',
            'api_key': 'API_KEY'
        }
    ],
    "temperature": 0
}

# Initialize agents for each role with a system message
def initialize_agent(name, role_description):
    return autogen.AssistantAgent(
        name=name,
        llm_config=llm_config,
        system_message=role_description
    )

# Agents initialization
agents = {
    'project_manager': initialize_agent("ProjectManager", "Handles planning and initial setup. Uses Agile methodology."),
    'react_component_dev': initialize_agent("ReactComponentDeveloper", "Develops React components. Uses Atomic design."),
    'styling_dev': initialize_agent("StylingDev", "Handles styling and themes. Uses CSS/Sass."),
    'db_architect': initialize_agent("DatabaseArchitect", "Designs the database. Uses SQL/NoSQL."),
    'api_dev': initialize_agent("ApiDeveloper", "Develops API. Uses Node.js, Express.js."),
    'state_management': initialize_agent("StateManagementSpecialist", "Handles state management. Uses Redux/MobX."),
    'react_router': initialize_agent("ReactRouterManager", "Manages React Routing. Uses React Router."),
    'auth_specialist': initialize_agent("AuthSpecialist", "Handles authentication and authorization. Uses OAuth, JWT."),
    'frontend_tester': initialize_agent("FrontEndTester", "Conducts frontend tests. Uses Jest."),
    'backend_tester': initialize_agent("BackEndTester", "Conducts backend tests. Uses Mocha, Chai."),
    'e2e_tester': initialize_agent("EndToEndTester", "Conducts end-to-end tests. Uses Cypress, Selenium."),
}

# Define role interactions and task dependencies
role_interactions = {
    'project_manager': {'next_role': 'react_component_dev', 'task_message': 'Define project scope, timeline, and allocate resources.'},
    'react_component_dev': {'next_role': 'styling_dev', 'task_message': 'Develop reusable React components.'},
    'styling_dev': {'next_role': 'db_architect', 'task_message': 'Design styling and themes.'},
    'db_architect': {'next_role': 'api_dev', 'task_message': 'Design the database schema.'},
    'api_dev': {'next_role': 'state_management', 'task_message': 'Develop API endpoints.'},
    'state_management': {'next_role': 'react_router', 'task_message': 'Set up state management.'},
    'react_router': {'next_role': 'auth_specialist', 'task_message': 'Implement React routing.'},
    'auth_specialist': {'next_role': 'frontend_tester', 'task_message': 'Implement authentication and authorization.'},
    'frontend_tester': {'next_role': 'backend_tester', 'task_message': 'Conduct front-end tests.'},
    'backend_tester': {'next_role': 'e2e_tester', 'task_message': 'Conduct back-end tests.'},
    'e2e_tester': {'next_role': None, 'task_message': 'Conduct end-to-end tests.'},
}

# Task execution logic
def execute_task(current_role):
    next_role_info = role_interactions.get(current_role)
    if not next_role_info:
        print(f"Role {current_role} has no further interactions.")
        return
    
    next_role = next_role_info['next_role']
    task_message = next_role_info['task_message']
    
    print(f"{current_role} is executing task: {task_message}")
    
    # Simulating task execution by the agent
    agent = agents[current_role]
    response = agent.query(task_message)
    
    print(f"{current_role} completed task with response: {response}")
    
    # Adding next role to queue
    if next_role:
        task_queue.put(next_role)

# Seed the task queue with the starting role
task_queue.put('project_manager')

# Main loop to process tasks
while not task_queue.empty():
    current_role = task_queue.get()
    execute_task(current_role)
    time.sleep(1)  # Simulating a delay between tasks