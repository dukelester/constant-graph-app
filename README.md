# Constant Graph App

This project is a Node.js server built using the Nest.js framework. It represents a graph with nodes, where each node corresponds to a status represented by a number. Each edge in the graph is a set of rules that defines whether, on a transition, the system will move to the following state. The set of rules on each edge is defined as [Action, Rule, Type].

##### Action: SEND or RETURN
##### Rule: ADMIN, PARTNER, USER, or COURIER
##### Type: SINGLE or BULK
##### For example, [S, A, SINGLE] means [SEND, ADMIN, SINGLE].

## Project Structure

The project follows a modular structure using Nest.js. The main components include:

Nodes Module: Handles nodes in the graph.
Edges Module: Manages edges and transitions in the graph.
Graph Module: Contains the GraphService for handling graph-related logic.
Node Model: Defines the structure of a node.
Edge Model: Defines the structure of an edge.


## Getting Started


### Prerequisites

Node.js and npm installed on your machine.

### Installation

Clone the repository:

bash
Copy code
git clone `https://github.com/dukelester/constant-graph-app.git`
Navigate to the project directory:

bash
Copy code
cd constant-graph-app
Install dependencies:

bash
Copy code
npm install
Running the Application
Start the Nest.js server:

bash
Copy code
npm run start
The server will be running at `http://localhost:3000`

### Endpoints

## Get Next Status
Endpoint: GET /nodes/:action/:rule/:type/:currentStatus
Example: GET `http://localhost:3000/nodes/SEND/ADMIN/SINGLE/2`
Output: Returns the next status for the transition.

## Find Path for Bulk Statuses

Endpoint: GET /edges/path/:action/:rule/:type/:statuses
Example: GET `http://localhost:3000/edges/path/RETURN/ADMIN/SINGLE/4,5,2`
Output: Returns an array of next statuses for each status in the provided array.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

