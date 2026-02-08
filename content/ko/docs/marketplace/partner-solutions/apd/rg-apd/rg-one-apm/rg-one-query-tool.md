---
title: "Query Tool"
url: /appstore/partner-solutions/apd/rg-one-query-tool/
---
데이터베이스 또는 애플리케이션 정보를 수집하기 위해 Query Tool이 도입되었습니다.

Query Tool을 사용하면 OQL, XPath 및 JDBC 쿼리를 수행할 수 있습니다. Query Tool을 열면 구성된 모든 쿼리의 개요가 표시되며, 쿼리를 추가, 수정 및 삭제할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-query-tool/List.png" class="no-border" >}}

편집할 쿼리를 열면 설명을 입력하고, 유형을 선택하고, 쿼리를 입력하고, 검색할 최대 행 수를 설정할 수 있는 대화 상자가 나타납니다.

실행 버튼을 사용하면 결과를 볼 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-query-tool/OQL.png" class="no-border" >}}                       

Measurements Tool에서 사용되는 쿼리를 열면 읽기 전용으로 표시됩니다.

*//System.User[starts-with(Name,'a')];Name,LastLogin*과 같은 XPath 쿼리를 수행할 수 있습니다. XPath 쿼리의 경우 가장하려는 사용자를 선택할 수 있으므로, 쿼리에 보안이 포함됩니다.

ID 유형의 쿼리를 수행할 수 있습니다. 이는 주어진 ID와 관련된 Mendix Entity를 결정합니다.
또한 ID 쿼리는 ID와 관련된 Entity에 특정한 열을 지정하고 이를 쿼리 결과로 표시할 수 있습니다.

추가로 JDBC(순수 SQL) 쿼리를 수행하여 데이터베이스에서 정보를 얻을 수 있습니다.

측정에 쿼리를 사용하려면 쿼리가 1개의 결과를 반환하거나, 여러 행을 반환하는 경우 첫 번째 열이 고유 식별자로 사용되어야 합니다:

검색 옵션 Search Query History에서 GUI에서 실행된 모든 문을 볼 수 있습니다. 측정 수집 쿼리는 측정으로 이어지므로 이력에 추가되지 않습니다.
