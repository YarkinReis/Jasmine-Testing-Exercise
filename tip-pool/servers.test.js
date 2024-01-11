describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

it('should update table on updateServerTable()',function(){
  submitServerInfo();
  updateServerTable();
  let currentList = document.querySelectorAll('#serverTable tbody tr td');
  
  console.log(currentList[2]);
  expect( currentList.length).toEqual(2);
  expect( currentList[0].innerText).toEqual("Alice");
  expect( currentList[1].innerText).toEqual("$10.00");

})

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
