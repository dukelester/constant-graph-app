# The Design

The design follows a modular and component-based structure, leveraging the capabilities of the Nest.js framework. The application is designed to represent a constant graph with nodes and edges, where nodes are statuses and edges define transitions between statuses based on specified rules.

## Modular Structure:

#### Nodes Module:

Handles the representation and manipulation of nodes in the graph.
Consists of a controller (NodesController) for defining HTTP endpoints related to nodes.

#### Edges Module:

Manages the edges and transitions in the graph.
Contains a controller (EdgesController) to define HTTP endpoints related to edges.

#### Graph Module:

Houses the GraphService that handles the core logic of the graph, such as finding the next status and paths based on transitions.
This module encapsulates the main business logic of the application.

## Models:


#### Node Model (node.model.ts):

Defines the structure of a node, representing a status with an id and a numerical value.

#### Edge Model (edge.model.ts):

Describes the structure of an edge, specifying the rules for a transition, including action (SEND/RETURN), rule (ADMIN/PARTNER/USER/COURIER), and type (SINGLE/BULK).

## Service:

#### Graph Service (graph.service.ts):

Manages the core logic of the graph, including the addition of nodes and edges, finding the next status for a given transition, and finding paths for bulk statuses.
Provides methods to handle graph-related operations.

## Controllers:


#### Nodes Controller (nodes.controller.ts):

Handles HTTP requests related to nodes.
Provides an endpoint to get the next status for a given transition.
Edges Controller (edges.controller.ts):

Manages HTTP requests related to edges.
Provides an endpoint to find paths for bulk statuses based on a given transition.

## Main Application:

app.module.ts and main.ts:
The main module configures the application by importing the required modules (NodesModule and EdgesModule) and providers (GraphService).
The main.ts file bootstraps the Nest.js application.

## API Endpoints:

GET `/nodes/:action/:rule/:type/:currentStatus`:

Returns the next status for a given transition.

GET `/edges/path/:action/:rule/:type/:statuses`:

Returns an array of next statuses for each status in the provided array, considering a specified transition.

## Additional Notes:

The application follows RESTful API principles, organizing resources using controllers and modules.
The design promotes separation of concerns by encapsulating related functionality within modules.
The project structure is scalable and maintainable, allowing for the addition of more features or modules in the future.
The code is modular, making it easier to test and update individual components independently.
