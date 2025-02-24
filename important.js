function linkedListToArray(head) {
      const result = [];
      let current = head;
      while (current !== null) {
        result.push(current.value); 
        current = current.next;
      }
      return result;
    }
    
    function arrayToLinkedList(arr) {
      if (arr.length === 0) return null;
      const head = new ListNode(arr[0]);
      let current = head;
      for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
      }
      return head;
    }