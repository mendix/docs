---
title: "Git 저장소 최적화"
url: /refguide9/git-storage-optimization-dialog/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Git은 리포지토리 내부에 다양한 유형의 가비지 객체를 축적할 수 있습니다. 여기에는 접근 불가능한(또는 분리된) 커밋, 참조되지 않은 blob 객체 등이 포함될 수 있습니다. Git은 이러한 객체를 즉시 삭제하지 않으며, 가능한 한 데이터 손실을 방지하면서 리포지토리 히스토리를 보존하려고 합니다. 따라서 시간이 지남에 따라 리포지토리가 커지는 것을 확인할 수 있습니다. 하지만 Git 유틸리티 도구의 일부인 `git gc`(가비지 컬렉션) 명령을 사용하여 리포지토리를 축소하고 정리할 수 있습니다. 명령줄을 사용할 필요 없이, Studio Pro에서는 Git 가비지 컬렉션 기능을 기반으로 구축된 **Git Repository Optimization** 기능을 제공합니다.

이 기능을 사용하는 두 가지 방법이 있습니다:

* [수동 리포지토리 최적화](#manual-optimization) – 가비지 컬렉션을 즉시 수행해야 할 때 이 옵션을 사용하십시오.

* [자동 리포지토리 최적화](#automatic-optimization) – 최적화 프로세스가 백그라운드에서 반복적으로 실행되어 리포지토리를 정기적으로 정리하려면 이 옵션을 사용하십시오.

{{% alert color="warning" %}}
저장소 최적화가 진행되는 동안 해당 리포지토리에서 Git 명령줄을 통한 어떠한 명령도 실행하지 않도록 주의하십시오. 일부(드물고 제한적인) 경우에 이로 인해 심각한 리포지토리 구조 손상이 발생할 수 있습니다.
{{% /alert %}}

## 수동 리포지토리 최적화 {#manual-optimization}

Git 리포지토리 저장소를 수동으로 최적화하려면 다음을 수행하십시오:

1. **Version Control** 메뉴 > **Optimize Repository Storage...**를 여십시오. (메뉴 옵션에 대한 자세한 내용은 Version Control Menu의 [Optimize Storage Repository](/refguide9/version-control-menu/#optimize-storage) 섹션을 참조하십시오.)
2. **Optimize Repository Storage** 팝업 창에서 **Optimize** 버튼을 누르십시오.

최적화 프로세스가 시작됩니다. 실행 중인 프로세스의 상태는 팝업 창의 진행률 표시줄과 Studio Pro 오른쪽 하단에 표시됩니다. 작업에 다소 시간이 걸릴 수 있습니다. 팝업 창을 닫고 평소대로 앱 작업을 계속할 수 있지만, 최적화가 진행되는 동안 커밋 및 업데이트와 같은 대부분의 버전 관리 명령은 비활성화됩니다.

프로세스가 완료되면 **Git storage optimization** 알림 메시지가 표시되고 비활성화되었던 명령이 다시 사용 가능해집니다.

{{% alert color="info" %}}
최적화 프로세스가 완료되어도 **Optimize Repository Storage** 팝업 창이 자동으로 닫히지 않습니다. 수동으로 닫아야 합니다. 최적화 프로세스 중에도 팝업 창을 닫을 수 있으며, 이는 프로세스에 영향을 미치지 않습니다.
{{% /alert %}}

## 자동 리포지토리 최적화 {#automatic-optimization}

Git 리포지토리 저장소를 자동으로 정기 최적화하려면 다음을 수행하십시오:

1. **Edit** 메뉴 > **Preferences** > **Version Control** 탭을 여십시오.
2. **Git** 섹션에서 **Enable automatic repository optimization** 옵션을 활성화하십시오.
3. **Number of commits**에서 백그라운드에서 최적화 프로세스를 시작하기 위해 도달해야 하는 최소 커밋 수를 지정하십시오(자세한 내용은 [Preferences](/refguide9/preferences-dialog/)를 참조하십시오).
4. **OK**를 클릭하십시오.
5. Studio Pro가 사용자의 활동을 추적하기 시작합니다. 그러나 제한에 도달하거나 초과한다고 해서 프로세스가 즉시 시작되는 것은 아닙니다. 프로세스를 트리거하려면 푸시(**Version Control** > **Push**)하거나 커밋(**Version Control** > **Commit**에서 **Also push changes to the remote server** 옵션 활성화)하십시오.

최적화가 완료되면 Studio Pro는 커밋 카운터를 0으로 재설정합니다.

{{% alert color="info" %}}
이 기능을 비활성화해도 리포지토리 커밋 카운터는 중지되지 않습니다(애플리케이션 폴더에서 찾을 수 있습니다: `.git/config` 파일을 열고 `commits-since-gc` 매개변수를 확인하십시오). 커밋 수 계산은 계속됩니다. 자동 리포지토리 최적화를 다시 활성화할 때 이 점에 유의하십시오.
{{% /alert %}}
