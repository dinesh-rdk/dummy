# Set versions
GIT_VERSION=2.13.2

# Colors
# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
NC='\033[0m' # No Color
GREEN='\033[0;32m'
RED='\033[0;31m'

if (echo a version $GIT_VERSION; git --version) | sort -Vk3 | tail -1 | grep -q git
then
    printf "check-version > ${GREEN} Git version successfully satisified${NC}\n"
    return 0
else
    printf "check-version > ${RED} Git version not satisified. Please install git >= $GIT_VERSION${NC}\n"
    return 1
fi
