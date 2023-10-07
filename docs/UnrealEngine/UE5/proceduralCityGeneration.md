# Procedural City Generation

## Overview
In this article, we will explore the runtime city generation based on a random-shaped spline and a city generated alongside a road.

## Random-Shaped City Generation
This city is generated in a defined area.
First of all we created spline points and make a loop with it. We want these spline points to be linear.
Then we have our area where our city gonna be generated.
We gonna create different size of building (tall, medium, small).
We want to choose the density of buildings type we want, so we had a _DensityFilter_ node.
We also don't want our building to overlap between each other so we had a _SelfPruning_ node.
You can obviously add some mesh or scalable material to your building.

## City Alongside the Road Generation
We have building alongside the road.
Our city spline need to know which spline it gonna follow, so we need to define the road as spline to follow.
We will have to define the distance between the road and the buildings so for that we have 2 _TransformPoints_ node, one for each side of
the road.
Then we merge our both side to have something symmetric.
We add _ExtendModifier_ node decrease or increase the distance between each building.
And we want to have some nice meshes alongside this road.
(Be carefull depending on the size of your mesh we will have to update transform point in order that your building mesh will not
overlap).

## Conclusion
The goal is to create a city in a defined area and alongside the road and make sure that buildings form the city don't overlap between
each other. Also in the city have different type and size of buildings. That can be done with PCG Graph that allow you to have multiple
ways to choose the density, the size (height, width) of your city, avoiding overlap between all the buildings.