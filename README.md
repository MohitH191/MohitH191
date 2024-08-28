### Demonstration of Change Detection Strategies

**Change Detection Strategies Overview:**

* **Default**: Angular performs change detection on all components in the component tree whenever an event or async operation occurs.
* **OnPush**: Angular only checks for changes when the component’s inputs change by reference, or when an event is triggered within the component.

**How Components Are Updated:**

1. **Parent Component (`ParentComponent`)**:
   * Uses `ChangeDetectionStrategy.Default`.
   * Updates both primitive and non-primitive data.
   * Clicking the update buttons will trigger change detection on the parent and any child components.

2. **Child Component (`ChildComponent`)**:
   * Uses `ChangeDetectionStrategy.OnPush`.
   * Displays data passed from the parent.
   * Has its own button to update local data.
   * The `OnPush` strategy means the child component only updates when its inputs change by reference or its own internal state changes.

**Behavior of OnPush Strategy:**

* **Scenario 1: Primitive Data** - Updating primitive data in the parent component will be detected by the child component because Angular's default change detection strategy will propagate changes.
* **Scenario 2: Non-Primitive Data** - Updating non-primitive data (object) in the parent will not trigger change detection in the child unless the reference of the non-primitive data is changed.
* **Scenario 3: Child Component Data** - The child component's own data update does not affect its parent's change detection. Updates within the child component are handled internally.

