### Tree

Attempts to create a JSON object from a flag string

Example usage:

````
addTree('1|100376|100377|100378');
addTree('1|100376|100377|100379|100380');
````

Desired output:

````
{
	id:"1",
	children: {
		id:"100376",
		children: {
			id:"100377",
			children: {
				id:"100378",
				children: {},
				id: "100379",
				children: {
					id:"100380",
					children: {}
			}
			}
		}
	}
}
````